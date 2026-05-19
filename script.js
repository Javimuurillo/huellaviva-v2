/*
  HUELLA VIVA - SCRIPT.JS
  Este archivo contiene toda la parte interactiva de la página.
  JavaScript se encarga de pintar mascotas, eventos y productos,
  guardar datos en localStorage, abrir el panel de administración,
  controlar el modo oscuro, el carrito y el chatbot.
*/

// Esperamos a que cargue todo el HTML antes de ejecutar funciones.
document.addEventListener("DOMContentLoaded", () => {
    // Activa el modo claro/oscuro y recuerda la elección del usuario.
  initTheme();
   // Prepara el menú responsive para móvil.
  initMenu();