// src/scripts/theme.js
class ThemeManager {
    constructor() {
      this.theme = this.getInitialTheme();
      this.init();
    }

    getInitialTheme() {
      // Check for saved theme in localStorage
      if (typeof localStorage !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          return savedTheme;
        }
      }

      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }

      return 'light';
    }

    init() {
      // Apply theme immediately to prevent flash
      this.applyTheme(this.theme);

      // Listen for system theme changes
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (!localStorage.getItem('theme')) {
            this.setTheme(e.matches ? 'dark' : 'light');
          }
        });
      }
    }

    applyTheme(theme) {
      const root = document.documentElement;

      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }

      // Store in localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', theme);
      }
    }

    toggle() {
      const newTheme = this.theme === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
    }

    setTheme(theme) {
      this.theme = theme;
      this.applyTheme(theme);

      // Dispatch custom event for other components to listen
      window.dispatchEvent(new CustomEvent('theme-changed', {
        detail: { theme }
      }));
    }

    getTheme() {
      return this.theme;
    }
  }

  // Initialize theme manager
  const themeManager = new ThemeManager();

  // Make it globally available
  window.themeManager = themeManager;

  // Export for module usage
  export default themeManager;
