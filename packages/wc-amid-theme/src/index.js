import Root from "./Root";

export default {
  name: "wc-sevilla-theme",
  roots: {
    theme: Root
  },
  state: {

    theme: {
      // isMenuOpen: false
      theme: {
        autoPrefetch: "in-view",
        menu: [],
        isMobileMenuOpen: false,
        featured: {
          showOnList: false,
          showOnPost: false,
        },
      },
    }
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },

      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },

    }
  }
};
