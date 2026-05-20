# Huella Viva
Credenciales de administración:
- Usuario: `admin`
- Contraseña: `peludito203`

# Huella Viva - Proyecto HTML, CSS y JavaScript

Este proyecto es una conversión a una página web estática usando solamente:

- `index.html`: estructura de la web.
- `style.css`: estilos, responsive y animaciones.
- `script.js`: interacción, filtros, carrito, formularios, favoritos, estado y tema oscuro.

No necesita instalar nada. Para probarlo, abre `index.html` en el navegador.

## Funcionalidades incluidas

1. Página inicial con animaciones.
2. Menú responsive para móvil.
3. Tema claro/oscuro guardado en `localStorage`.
4. Buscador de mascotas por nombre o raza.
5. Filtro de mascotas por perros y gatos.
6. Sistema de favoritos guardado en `localStorage`.
7. Modal con ficha de mascota.
8. Solicitud de adopción simulada.
9. Listado de eventos.
10. Tienda solidaria con carrito funcional.
11. Recomendador de mascota ideal tipo “match”.
12. Formulario de voluntariado.
13. Consulta de estado por email.
14. Botón para volver arriba.
15. Animaciones al hacer scroll.

## Objetivos del trabajo y cómo se cumplen

### 1. Commits reales en el repositorio

Se recomienda subir el proyecto a GitHub con commits separados y reales. Ejemplo:

```bash
git init
git add index.html
git commit -m "Crear estructura principal HTML"

git add style.css
git commit -m "Añadir estilos responsive y animaciones"

git add script.js
git commit -m "Añadir lógica de mascotas, filtros y favoritos"

git add script.js
git commit -m "Añadir carrito, formularios y consulta de estado"

git add README.md
git commit -m "Documentar proyecto y reparto de tareas"
```

### 2. Uso correcto de las herramientas indicadas

El proyecto usa las herramientas pedidas: HTML, CSS y JavaScript. Cada tecnología está separada en su propio archivo para que sea más fácil revisarlo y explicarlo.

### 3. Comunicación por los canales establecidos

Para justificarlo, el grupo puede indicar que la comunicación se hizo por el canal acordado por clase, por ejemplo Teams, Moodle, WhatsApp o GitHub Issues. Lo importante es dejar constancia de decisiones, reparto de tareas y cambios.

### 4. Código que podáis explicar línea por línea

Los archivos tienen comentarios en los bloques importantes. La defensa puede organizarse así:

- En `index.html`, explicar la estructura: cabecera, secciones, formularios, modal y pie.
- En `style.css`, explicar variables, responsive, tarjetas, botones y animaciones.
- En `script.js`, explicar arrays de datos, renderizado con `innerHTML`, eventos, filtros y `localStorage`.

### 5. Participación de todos los miembros del grupo

Ejemplo de reparto:

| Miembro | Responsabilidad |
|---|---|
| Persona 1 | Estructura HTML y secciones principales |
| Persona 2 | Diseño CSS, responsive y animaciones |
| Persona 3 | JavaScript de mascotas, filtros y favoritos |
| Persona 4 | Carrito, formularios, estado y documentación |

### 6. Cumplimiento de las horas estipuladas

Ejemplo de control horario:

| Día | Tarea | Tiempo |
|---|---|---|
| Día 1 | Análisis del proyecto y estructura HTML | 2 h |
| Día 2 | Estilos, responsive y animaciones | 3 h |
| Día 3 | JavaScript de filtros, modal y favoritos | 3 h |
| Día 4 | Carrito, formularios y pruebas | 3 h |
| Día 5 | Documentación y revisión final | 1 h |

### 7. Capacidad para defender cualquier parte del proyecto

Puntos clave para defender:

- `localStorage` se usa para guardar favoritos, carrito y solicitudes aunque se cierre el navegador.
- `addEventListener` se usa para responder a clics, escritura en buscador, formularios y scroll.
- `filter()` se usa para buscar mascotas y solicitudes.
- `map()` se usa para crear tarjetas HTML desde arrays de datos.
- `IntersectionObserver` se usa para mostrar animaciones cuando los elementos entran en pantalla.
- El diseño responsive se consigue con `@media` en CSS.

## Cómo probar el proyecto

1. Descomprime la carpeta.
2. Abre `index.html` en Google Chrome, Firefox o Edge.
3. Prueba estas acciones:
   - Buscar una mascota.
   - Filtrar perros o gatos.
   - Marcar favoritos.
   - Abrir una ficha.
   - Solicitar adopción usando un email.
   - Añadir productos al carrito.
   - Enviar solicitud de voluntariado.
   - Consultar estado con el mismo email.
   - Cambiar tema claro/oscuro.

## Nota importante

Este proyecto es educativo. Las solicitudes, el carrito y los favoritos se guardan en el navegador del usuario, no en una base de datos real.

## Zona de administración añadida

En el pie de página aparece el enlace **Acceso Administración**. Al pulsarlo se abre una pantalla de inicio de sesión.

Credenciales de prueba:

- Usuario: `admin`
- Contraseña: `peludito203`

Dentro del panel se pueden ver tres pestañas:

1. **Adopciones**: muestra solicitudes creadas desde las fichas de mascotas.
2. **Voluntarios**: muestra solicitudes del formulario de voluntariado y permite aceptarlas.
3. **Tienda**: muestra pedidos generados al finalizar la compra simulada y permite añadir productos nuevos.

Todo está hecho con HTML, CSS y JavaScript usando `localStorage`, por eso los datos se guardan en el navegador del ordenador donde se prueba la página.


## Mejoras de administración

- El acceso privado mantiene los campos de usuario y contraseña, pero ya no muestra las credenciales en pantalla.
- Las solicitudes de adopción permiten aprobar o rechazar.
- Las solicitudes de voluntariado permiten aceptar o rechazar.
- La lista de voluntarios aceptados permite quitar voluntarios de la lista.

Credenciales de prueba para la defensa del proyecto: usuario `admin` y contraseña `peludito203`.

## Mejora añadida: Chatbot Huellita

Se ha añadido un chatbot flotante llamado **Huellita**. Está hecho solo con HTML, CSS y JavaScript. No usa librerías externas ni inteligencia artificial real, sino una función de JavaScript que detecta palabras clave como `adopción`, `tienda`, `voluntariado`, `eventos`, `estado` o `administración` y devuelve una respuesta preparada.

Esta mejora ayuda a defender el proyecto porque demuestra manejo del DOM, eventos, formularios, creación dinámica de mensajes, clases CSS para abrir/cerrar componentes y adaptación a modo claro/oscuro.


## Versión v15 - Código comentado

En esta versión se han vuelto a añadir comentarios explicativos en los tres archivos principales:

- `index.html`: comentarios para identificar cada sección de la página.
- `style.css`: comentarios para explicar los bloques visuales, animaciones, modo oscuro, responsive, administración y chatbot.
- `script.js`: comentarios para explicar qué hace cada función importante y cómo se conectan los datos con la página.

La web mantiene las mismas funciones de la versión anterior, pero ahora el código es más fácil de defender y explicar línea por línea en clase.
