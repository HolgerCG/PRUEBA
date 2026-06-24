const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

const consultaForm = document.querySelector('#consultaForm');

if (consultaForm) {
  consultaForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(consultaForm);
    const nombre = data.get('nombre') || '';
    const telefono = data.get('telefono') || '';
    const servicio = data.get('servicio') || '';
    const mensaje = data.get('mensaje') || '';

    const texto = `Hola, deseo solicitar una consulta legal.%0A%0ANombre: ${encodeURIComponent(nombre)}%0ATeléfono: ${encodeURIComponent(telefono)}%0AÁrea de consulta: ${encodeURIComponent(servicio)}%0AMensaje: ${encodeURIComponent(mensaje)}`;
    window.open(`https://wa.me/593969341483?text=${texto}`, '_blank');
  });
}
