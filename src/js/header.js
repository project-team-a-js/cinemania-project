class HeaderManager {
  constructor() {
  
    this.menuButton = document.querySelector('.menu-button');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.isMobileMenuOpen = false;
    
    this.STORAGE_KEY = 'cinemania-theme';
    this.THEMES = {
      DARK: 'dark',
      LIGHT: 'light'
    };
    this.DEFAULT_THEME = this.THEMES.DARK;
    this.root = document.documentElement;
    this.toggle = document.querySelector('.toggle');
    
    this.init();
  }

  init() {
    this.initializeTheme();
    this.setupMobileMenu();
    this.setupThemeToggle();
  }

  // ==================== MOBILE MENU ====================
  
  setupMobileMenu() {
    if (this.menuButton && this.mobileMenu) {
      this.menuButton.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
      
      document.addEventListener('click', (e) => {
        if (this.isMobileMenuOpen && 
            !this.mobileMenu.contains(e.target) && 
            !this.menuButton.contains(e.target)) {
          this.closeMobileMenu();
        }
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isMobileMenuOpen) {
          this.closeMobileMenu();
        }
      });
    } else {
      console.warn('Mobile menu elements not found');
    }
  }

  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.mobileMenu.style.display = 'block';
    this.isMobileMenuOpen = true;
    this.menuButton.setAttribute('aria-expanded', 'true');
    
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    this.mobileMenu.style.display = 'none';
    this.isMobileMenuOpen = false;
    this.menuButton.setAttribute('aria-expanded', 'false');
    
    document.body.style.overflow = '';
  }

  // ==================== THEME SWITCHER ====================
  
  initializeTheme() {
    const savedTheme = this.getSavedTheme();
    this.applyTheme(savedTheme);
  }

  setupThemeToggle() {
    if (this.toggle) {
      this.updateToggleState();
      
      this.toggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    } else {
      console.warn('Theme toggle element not found');
    }
  }

  getSavedTheme() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return Object.values(this.THEMES).includes(saved) ? saved : this.DEFAULT_THEME;
    } catch (error) {
      console.warn('Could not access localStorage:', error);
      return this.DEFAULT_THEME;
    }
  }

  saveTheme(theme) {
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch (error) {
      console.warn('Could not save theme to localStorage:', error);
    }
  }

  applyTheme(theme) {
    if (!Object.values(this.THEMES).includes(theme)) {
      console.warn(`Invalid theme: ${theme}. Using default.`);
      theme = this.DEFAULT_THEME;
    }

    if (theme === this.THEMES.LIGHT) {
      this.root.setAttribute('data-theme', 'light');
    } else {
      this.root.removeAttribute('data-theme');
    }

    this.currentTheme = theme;
    this.saveTheme(theme);
    this.updateToggleState();
    
    this.dispatchThemeChangeEvent(theme);
  }

  updateToggleState() {
    if (this.toggle) {
      if (this.currentTheme === this.THEMES.LIGHT) {
        this.toggle.classList.add('active');
      } else {
        this.toggle.classList.remove('active');
      }
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === this.THEMES.DARK ? 
                     this.THEMES.LIGHT : 
                     this.THEMES.DARK;
    this.applyTheme(newTheme);
  }

  dispatchThemeChangeEvent(theme) {
    const event = new CustomEvent('themechange', {
      detail: { theme }
    });
    document.dispatchEvent(event);
  }

  // ==================== PUBLIC API ====================
  
  getCurrentTheme() {
    return this.currentTheme;
  }

  setTheme(theme) {
    this.applyTheme(theme);
  }

  isDarkMode() {
    return this.currentTheme === this.THEMES.DARK;
  }

  isLightMode() {
    return this.currentTheme === this.THEMES.LIGHT;
  }
}

const headerManager = new HeaderManager();

window.headerManager = headerManager;

document.addEventListener('themechange', (e) => {
  console.log(`Theme changed to: ${e.detail.theme}`);
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && headerManager.isMobileMenuOpen) {
    headerManager.closeMobileMenu();
  }
});