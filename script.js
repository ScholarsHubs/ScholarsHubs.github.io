document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavSidebar = document.querySelector('.mobile-nav-sidebar');
    const closeNavButton = document.querySelector('.close-nav');
    // Select the specific toggler link for the submenu, not the parent LI
    const submenuToggler = document.querySelector('.has-submenu > a'); 
    const submenu = document.querySelector('.submenu'); // The actual submenu UL

    // Toggle mobile navigation sidebar
    if (hamburgerMenu && mobileNavSidebar && closeNavButton) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNavSidebar.classList.add('active');
        });

        closeNavButton.addEventListener('click', () => {
            mobileNavSidebar.classList.remove('active');
        });
    }

    // Toggle "More Topics" submenu (UPDATED: Precise targeting for preventDefault)
    if (submenuToggler && submenu) {
        // We listen on the toggler link itself
        submenuToggler.addEventListener('click', (event) => {
            event.preventDefault(); // ONLY prevent default for this specific toggler link
            
            // hasSubmenu is now potentially undefined if we didn't query it globally,
            // so we get its parent LI
            const parentHasSubmenu = submenuToggler.parentElement; 
            if (parentHasSubmenu) {
                parentHasSubmenu.classList.toggle('open');
            }
            submenu.classList.toggle('active');
        });
    }

    // Shrinking Header on Scroll
    const mainHeader = document.querySelector('.main-header'); // Get the header element
    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // If scrolled more than 50px
                mainHeader.classList.add('shrink');
            } else {
                mainHeader.classList.remove('shrink');
            }
        });
    }

    // Optional: Close sidebar if clicked outside of it
    // document.addEventListener('click', (event) => {
    //     if (mobileNavSidebar.classList.contains('active') &&
    //         !mobileNavSidebar.contains(event.target) &&
    //         !hamburgerMenu.contains(event.target)) {
    //         mobileNavSidebar.classList.remove('active');
    //     }
    // });
});
