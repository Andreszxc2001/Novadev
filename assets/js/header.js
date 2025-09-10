fetch('assets/includes/header.html')
  .then(respuesta => respuesta.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;

    // --- INICIALIZACIÓN DE MENÚ MÓVIL Y DROPDOWNS ---
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('#navmenu');
    
    function mobileNavToogle() {
      document.body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
      navMenu.classList.toggle('navmenu-active');
    }
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    // Cerrar menú móvil al hacer click en un enlace
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });

    // Dropdowns (si tienes .toggle-dropdown en el header)
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    // --- ACTIVAR ENLACE ACTUAL SEGÚN LA URL ---
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('#navmenu a').forEach(link => {
      // Remueve cualquier clase active previa
      link.classList.remove('active');
      // Si el href coincide con la página actual, agrega active
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });
