import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { trackUniqueView, getViewCount } from './viewTracker';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

// Mock FingerprintJS
vi.mock('@fingerprintjs/fingerprintjs');

describe('viewTracker', () => {
  let localStorageMock: Record<string, string>;
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Setup localStorage mock
    localStorageMock = {};
    global.localStorage = {
      getItem: vi.fn((key: string) => localStorageMock[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        localStorageMock[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete localStorageMock[key];
      }),
      clear: vi.fn(() => {
        localStorageMock = {};
      }),
      length: 0,
      key: vi.fn(() => null),
    } as Storage;

    // Setup fetch mock
    fetchMock = vi.fn();
    global.fetch = fetchMock;

    // Mock console methods
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});

    // Mock FingerprintJS
    const mockFp = {
      get: vi.fn().mockResolvedValue({
        visitorId: 'test-device-id-123',
      }),
    };
    (FingerprintJS.load as any) = vi.fn().mockResolvedValue(mockFp);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('trackUniqueView', () => {
    it('should track a view for a new post', async () => {
      // Arrange
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      // Act
      const result = await trackUniqueView('test-post-slug');

      // Assert
      expect(result).toBe(true);
      expect(fetchMock).toHaveBeenCalledWith('/api/track-view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: 'test-post-slug',
          deviceId: 'test-device-id-123',
        }),
      });
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'viewedPosts',
        JSON.stringify({ 'test-post-slug': true })
      );
      expect(console.log).toHaveBeenCalledWith('View tracked successfully');
    });

    it('should return false if post already viewed in localStorage', async () => {
      // Arrange
      localStorageMock['viewedPosts'] = JSON.stringify({
        'test-post-slug': true,
      });

      // Act
      const result = await trackUniqueView('test-post-slug');

      // Assert
      expect(result).toBe(false);
      expect(fetchMock).not.toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('Post already viewed (localStorage)');
    });

    it('should handle localStorage parse errors gracefully', async () => {
      // Arrange
      localStorageMock['viewedPosts'] = 'invalid-json';
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      // Act
      const result = await trackUniqueView('test-post-slug');

      // Assert
      expect(result).toBe(true);
      expect(fetchMock).toHaveBeenCalled();
    });

    it('should handle non-object localStorage values', async () => {
      // Arrange
      localStorageMock['viewedPosts'] = JSON.stringify(['not', 'an', 'object']);
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      // Act
      const result = await trackUniqueView('test-post-slug');

      // Assert
      expect(result).toBe(true);
      expect(fetchMock).toHaveBeenCalled();
    });

    it('should return false if API request fails', async () => {
      // Arrange
      fetchMock.mockResolvedValue({
        ok: false,
        json: async () => ({ error: 'Server error' }),
      });

      // Act
      const result = await trackUniqueView('test-post-slug');

      // Assert
      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith('Failed to track view:', {
        error: 'Server error',
      });
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });

    it('should handle fetch errors', async () => {
      // Arrange
      fetchMock.mockRejectedValue(new Error('Network error'));

      // Act
      const result = await trackUniqueView('test-post-slug');

      // Assert
      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith(
        'Error tracking view:',
        expect.any(Error)
      );
    });

    it('should handle FingerprintJS errors', async () => {
      // Arrange
      (FingerprintJS.load as any) = vi.fn().mockRejectedValue(
        new Error('Fingerprint error')
      );

      // Act
      const result = await trackUniqueView('test-post-slug');

      // Assert
      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith(
        'Error tracking view:',
        expect.any(Error)
      );
    });

    it('should preserve existing viewed posts in localStorage', async () => {
      // Arrange
      localStorageMock['viewedPosts'] = JSON.stringify({
        'existing-post': true,
      });
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      // Act
      await trackUniqueView('new-post');

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'viewedPosts',
        JSON.stringify({
          'existing-post': true,
          'new-post': true,
        })
      );
    });
  });

  describe('getViewCount', () => {
    it('should return view count for a post', async () => {
      // Arrange
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ count: 42 }),
      });

      // Act
      const count = await getViewCount('test-post-slug');

      // Assert
      expect(count).toBe(42);
      expect(fetchMock).toHaveBeenCalledWith(
        '/api/get-view-count?slug=test-post-slug'
      );
    });

    it('should return 0 if count is missing in response', async () => {
      // Arrange
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({}),
      });

      // Act
      const count = await getViewCount('test-post-slug');

      // Assert
      expect(count).toBe(0);
    });

    it('should return 0 if API request fails', async () => {
      // Arrange
      fetchMock.mockResolvedValue({
        ok: false,
      });

      // Act
      const count = await getViewCount('test-post-slug');

      // Assert
      expect(count).toBe(0);
      expect(console.error).toHaveBeenCalledWith('Failed to get view count');
    });

    it('should return 0 on fetch error', async () => {
      // Arrange
      fetchMock.mockRejectedValue(new Error('Network error'));

      // Act
      const count = await getViewCount('test-post-slug');

      // Assert
      expect(count).toBe(0);
      expect(console.error).toHaveBeenCalledWith(
        'Error getting view count:',
        expect.any(Error)
      );
    });

    it('should properly encode slug with special characters', async () => {
      // Arrange
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ count: 10 }),
      });

      // Act
      await getViewCount('post-with-special-chars-&-symbols');

      // Assert
      expect(fetchMock).toHaveBeenCalledWith(
        '/api/get-view-count?slug=post-with-special-chars-%26-symbols'
      );
    });
  });
});
