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
// Activa animaciones al hacer scroll y el botón de volver arriba.
  initScrollEffects();
   // Dibuja las tarjetas de mascotas disponibles.
  renderPets();
  // Dibuja las tarjetas de eventos.
  renderEvents();
  // Carga productos añadidos desde administración.
  loadSavedAdminProducts();
   // Dibuja los productos de la tienda.
  renderProducts();
  // Dibuja el carrito y su total.
  renderCart();
  // Activa el recomendador de mascotas.
  initMatch();
  // Activa el formulario de voluntariado.
  initVolunteerForm();
  // Activa la consulta de estado por email.
  initStatusChecker();
   // Activa login y panel de administración.
  initAdminPanel();
  // Activa el chatbot flotante.
  initChatbot();
});

// Lista de mascotas. Cada objeto representa una tarjeta que se mostrará en la sección Mascotas.
const pets = [
  { id: "buddy", name: "Buddy", breed: "Beagle", age: "3 meses", gender: "Macho", size: "Pequeño", type: "dog", status: "Disponible", temperament: "Cachorro curioso, sociable y con mucha energía.", care: "Necesita juegos, paseos y una familia activa.", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&h=800&auto=format&fit=crop" },
  { id: "lucy", name: "Lucy", breed: "Boyero de Berna", age: "4 meses", gender: "Hembra", size: "Grande", type: "dog", status: "Disponible", temperament: "Muy dulce, equilibrada, tranquila y leal.", care: "Necesita espacio, cepillados y una familia paciente.", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&h=800&auto=format&fit=crop" },
  { id: "max", name: "Max", breed: "Pastor Alemán", age: "3 años", gender: "Macho", size: "Grande", type: "dog", status: "Disponible", temperament: "Noble, inteligente, protector y muy fiel.", care: "Necesita actividad física y retos mentales.", img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=800&h=800&auto=format&fit=crop" },
  { id: "rocky", name: "Rocky", breed: "Boxer", age: "4 años", gender: "Macho", size: "Grande", type: "dog", status: "Disponible", temperament: "Activo, alegre y muy bueno con niños.", care: "Necesita ejercicio diario y sesiones de juego.", img: "https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?q=80&w=800&h=800&auto=format&fit=crop" },
  { id: "bella", name: "Bella", breed: "Labrador Retriever", age: "1 año", gender: "Hembra", size: "Grande", type: "dog", status: "Disponible", temperament: "Sociable, cariñosa y con mucha energía.", care: "Necesita paseos, juegos y contacto humano.", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&h=800&auto=format&fit=crop" },
  { id: "toby", name: "Toby", breed: "Poodle", age: "6 años", gender: "Macho", size: "Pequeño", type: "dog", status: "Disponible", temperament: "Elegante, inteligente y tranquilo.", care: "Necesita compañía y cuidados de pelo.", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&h=800&auto=format&fit=crop" },
  { id: "milo", name: "Milo", breed: "Común Europeo", age: "6 meses", gender: "Macho", size: "Pequeño", type: "cat", status: "Disponible", temperament: "Curioso, juguetón y cariñoso.", care: "Necesita rascadores, juguetes y atención.", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&h=800&auto=format&fit=crop" },
  { id: "luna", name: "Luna", breed: "Angora", age: "1 año", gender: "Hembra", size: "Mediano", type: "cat", status: "Disponible", temperament: "Tranquila, dulce y algo tímida al principio.", care: "Necesita cepillados y ambiente tranquilo.", img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=800&h=800&auto=format&fit=crop" }
];

// Lista de eventos. JavaScript recorre este array para crear la sección Próximos eventos.
const events = [
  { title: "Caminata Solidaria Mensual", date: "15 de mayo", time: "09:00", location: "Parque Central", category: "Comunidad", description: "Caminata grupal con perros rescatados para socializar y apoyar al refugio.", img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=800&h=600&auto=format&fit=crop" },
  { title: "Feria de Adopción", date: "20 de mayo", time: "10:00 - 17:00", location: "Sede Huella Viva", category: "Adopción", description: "Evento para conocer mascotas disponibles y recibir orientación sobre adopción responsable.", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&h=600&auto=format&fit=crop" },
  { title: "Noche de Gatitos", date: "25 de mayo", time: "18:00 - 21:00", location: "Refugio felino", category: "Adopción", description: "Actividad especial dedicada a gatos que buscan una familia definitiva.", img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=800&h=600&auto=format&fit=crop" },
  { title: "Taller de Lenguaje Canino", date: "5 de junio", time: "11:00", location: "Aula educativa", category: "Educación", description: "Taller para aprender señales básicas de comportamiento y cuidado canino.", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&h=600&auto=format&fit=crop" }
];