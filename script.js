// Los servicios se exploran sin enviar datos ni abrir canales de contacto.
const services = document.querySelectorAll('.services details');
services.forEach(item => item.addEventListener('toggle', () => {
  if (item.open) services.forEach(other => { if (other !== item) other.open = false; });
}));
