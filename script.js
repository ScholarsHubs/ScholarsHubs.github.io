document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavSidebar = document.querySelector('.mobile-nav-sidebar');
    const closeNavButton = document.querySelector('.close-nav');
    const submenuToggler = document.querySelector('.has-submenu > a'); 
    const submenu = document.querySelector('.submenu');
    const mainHeader = document.querySelector('.main-header'); 

    // Sidebar Search Elements (NEW)
    const sidebarSearchBar = document.querySelector('.sidebar-search-bar');
    const sidebarSearchInput = document.querySelector('.sidebar-search-bar input');
    const sidebarSearchButton = document.querySelector('.sidebar-search-bar button');

    // Sidebar Subscribe Elements (NEW)
    const sidebarSubscribeButton = document.querySelector('.sidebar-subscribe button');
    const sidebarSubscribeInput = document.querySelector('.sidebar-subscribe input[type="email"]');


    // Toggle mobile navigation sidebar
    if (hamburgerMenu && mobileNavSidebar && closeNavButton) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNavSidebar.classList.add('active');
        });

        closeNavButton.addEventListener('click', () => {
            mobileNavSidebar.classList.remove('active');
        });
    }

    // Toggle "More Topics" submenu
    if (submenuToggler && submenu) {
        submenuToggler.addEventListener('click', (event) => {
            event.preventDefault(); 
            const parentHasSubmenu = submenuToggler.parentElement; 
            if (parentHasSubmenu) {
                parentHasSubmenu.classList.toggle('open');
            }
            submenu.classList.toggle('active');
        });
    }

    // Shrinking Header on Scroll
    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { 
                mainHeader.classList.add('shrink');
            } else {
                mainHeader.classList.remove('shrink');
            }
        });
    }

    // Activate Sidebar Search (NEW)
    if (sidebarSearchButton && sidebarSearchInput) {
        sidebarSearchButton.addEventListener('click', () => {
            const query = sidebarSearchInput.value.trim();
            if (query) {
                // Redirect to a hypothetical search results page
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            } else {
                alert('Please enter a search term!'); // Basic feedback
            }
        });
        // Allow search on Enter key press
        sidebarSearchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sidebarSearchButton.click(); // Simulate button click
            }
        });
    }

    // Activate Sidebar Subscribe (NEW)
    if (sidebarSubscribeButton && sidebarSubscribeInput) {
        sidebarSubscribeButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default form submission (page reload)
            const email = sidebarSubscribeInput.value.trim();
            if (email && email.includes('@') && email.includes('.')) { // Simple email validation
                alert(`Thank you for subscribing, ${email}! (No actual subscription takes place)`);
                sidebarSubscribeInput.value = ''; // Clear input
            } else {
                alert('Please enter a valid email address.');
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
