document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavSidebar = document.querySelector('.mobile-nav-sidebar');
    const closeNavButton = document.querySelector('.close-nav');
    const hasSubmenu = document.querySelector('.has-submenu');
    const submenu = document.querySelector('.submenu');

    // Toggle mobile navigation sidebar
    if (hamburgerMenu && mobileNavSidebar && closeNavButton) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNavSidebar.classList.add('active');
        });

        closeNavButton.addEventListener('click', () => {
            mobileNavSidebar.classList.remove('active');
        });
    }

    // Toggle "And More!" submenu
    if (hasSubmenu && submenu) {
        hasSubmenu.addEventListener('click', (event) => {
            // Prevent default link behavior if clicking the 'And More!' link directly
            if (event.target.tagName === 'A') {
                event.preventDefault();
            }
            hasSubmenu.classList.toggle('open');
            submenu.classList.toggle('active');
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
