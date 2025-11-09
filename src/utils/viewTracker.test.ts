// tests/viewTracker.test.ts
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { trackUniqueView, getViewCount } from './viewTracker';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

// ✅ Mock FingerprintJS properly
vi.mock('@fingerprintjs/fingerprintjs', () => ({
  __esModule: true,
  default: {
    load: vi.fn().mockResolvedValue({
      get: vi.fn().mockResolvedValue({ visitorId: 'test-device-id-123' }),
    }),
  },
}));

describe('viewTracker', () => {
  let localStorageMock: Record<string, string>;
  let fetchMock: any;

  beforeEach(() => {
    // Reset localStorage mock
    localStorageMock = {};

    // Setup localStorage mock with proper getters/setters
    Object.defineProperty(global, 'localStorage', {
      value: {
        getItem: (key: string) => localStorageMock[key] || null,
        setItem: (key: string, value: string) => {
          localStorageMock[key] = value;
        },
        removeItem: (key: string) => {
          delete localStorageMock[key];
        },
        clear: () => {
          localStorageMock = {};
        },
        length: 0,
        key: () => null,
      },
      writable: true,
      configurable: true,
    });

    // Setup fetch mock
    fetchMock = vi.fn();
    global.fetch = fetchMock;

    // Mock console methods
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});

    // Reset FingerprintJS mock for each test
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
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      const result = await trackUniqueView('test-post-slug');

      expect(result).toBe(true);
      expect(fetchMock).toHaveBeenCalledWith('/api/track-view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: 'test-post-slug',
          deviceId: 'test-device-id-123',
        }),
      });

      const stored = JSON.parse(localStorageMock['viewedPosts']);
      expect(stored).toHaveProperty('test-post-slug', true);
      expect(console.log).toHaveBeenCalledWith('View tracked successfully');
    });

    it('should return false if post already viewed in localStorage', async () => {
      localStorageMock['viewedPosts'] = JSON.stringify({
        'test-post-slug': true,
      });

      const result = await trackUniqueView('test-post-slug');

      expect(result).toBe(false);
      expect(fetchMock).not.toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('Post already viewed (localStorage)');
    });

    it('should handle localStorage parse errors gracefully', async () => {
      localStorageMock['viewedPosts'] = 'invalid-json';
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      const result = await trackUniqueView('test-post-slug');
      expect(result).toBe(true);
      expect(fetchMock).toHaveBeenCalled();
    });

    it('should handle non-object localStorage values', async () => {
      localStorageMock['viewedPosts'] = JSON.stringify(['not', 'an', 'object']);
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      const result = await trackUniqueView('test-post-slug');
      expect(result).toBe(true);
      expect(fetchMock).toHaveBeenCalled();
    });

    it('should return false if API request fails', async () => {
      fetchMock.mockResolvedValue({
        ok: false,
        json: async () => ({ error: 'Server error' }),
      });

      const result = await trackUniqueView('test-post-slug');

      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith('Failed to track view:', {
        error: 'Server error',
      });
      // Verify localStorage was not updated
      expect(localStorageMock['viewedPosts']).toBeUndefined();
    });

    it('should handle fetch errors', async () => {
      fetchMock.mockRejectedValue(new Error('Network error'));

      const result = await trackUniqueView('test-post-slug');
      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith(
        'Error tracking view:',
        expect.any(Error)
      );
    });

    it('should handle FingerprintJS errors', async () => {
      (FingerprintJS.load as any) = vi.fn().mockRejectedValue(
        new Error('Fingerprint error')
      );

      const result = await trackUniqueView('test-post-slug');
      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith(
        'Error tracking view:',
        expect.any(Error)
      );
    });

    it('should preserve existing viewed posts in localStorage', async () => {
      localStorageMock['viewedPosts'] = JSON.stringify({
        'existing-post': true,
      });
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      const result = await trackUniqueView('new-post');

      expect(result).toBe(true);
      expect(localStorageMock['viewedPosts']).toBeDefined();
      const updated = JSON.parse(localStorageMock['viewedPosts']);
      expect(updated).toEqual({
        'existing-post': true,
        'new-post': true,
      });
    });

    it('should handle missing localStorage gracefully', async () => {
      // @ts-ignore
      delete global.localStorage;

      const result = await trackUniqueView('test-post-slug');
      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith(
        'Error tracking view:',
        expect.any(Error)
      );
    });
  });

  describe('getViewCount', () => {
    it('should return view count for a post', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ count: 42 }),
      });

      const count = await getViewCount('test-post-slug');

      expect(count).toBe(42);
      expect(fetchMock).toHaveBeenCalledWith(
        '/api/get-view-count?slug=test-post-slug'
      );
    });

    it('should return 0 if count is missing in response', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({}),
      });

      const count = await getViewCount('test-post-slug');
      expect(count).toBe(0);
    });

    it('should return 0 if API request fails', async () => {
      fetchMock.mockResolvedValue({ ok: false });

      const count = await getViewCount('test-post-slug');
      expect(count).toBe(0);
      expect(console.error).toHaveBeenCalledWith('Failed to get view count');
    });

    it('should return 0 on fetch error', async () => {
      fetchMock.mockRejectedValue(new Error('Network error'));

      const count = await getViewCount('test-post-slug');
      expect(count).toBe(0);
      expect(console.error).toHaveBeenCalledWith(
        'Error getting view count:',
        expect.any(Error)
      );
    });

    it('should return 0 if JSON parsing fails', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
        json: vi.fn().mockRejectedValue(new Error('Invalid JSON')),
      });

      const count = await getViewCount('test-post-slug');
      expect(count).toBe(0);
      expect(console.error).toHaveBeenCalledWith(
        'Error getting view count:',
        expect.any(Error)
      );
    });

    it('should properly encode slug with special characters', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
        json: async () => ({ count: 10 }),
      });

      await getViewCount('post-with-special-chars-&-symbols');

      expect(fetchMock).toHaveBeenCalledWith(
        '/api/get-view-count?slug=post-with-special-chars-%26-symbols'
      );
    });
  });
});
