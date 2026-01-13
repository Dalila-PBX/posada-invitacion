# Posada Invitación 2025

## 1. Descripción General
**Posada Invitación** es una aplicación web interactiva desarrollada con **Vue 3** y **Vite** para gestionar las invitaciones y confirmaciones de asistencia a la fiesta de fin de año corporativa. El sitio ofrece una experiencia visual festiva con efectos de nieve, cronograma de actividades, ubicación y un formulario de registro protegido por reCAPTCHA v3.

## 2. Estructura del Proyecto
El proyecto sigue una arquitectura modular basada en componentes de Vue y TypeScript.

```text
/
├── index.html              # Punto de entrada (Scripts externos y montaje)
├── enviar-db.php           # (Backend) Script PHP para procesar la asistencia
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── main.ts             # Montaje de la aplicación
│   ├── App.vue             # Componente raíz (Efecto de nieve global)
│   ├── assets/             # Imágenes y recursos estáticos
│   └── modules/invitacion/ # Módulo principal
│       ├── components/     # Componentes de la UI (Header, Form, Cronograma)
│       ├── composables/    # Lógica reutilizable (useAttendanceForm.ts)
│       └── interfaces/     # Definiciones de tipos TypeScript
```

## 3. Tecnologías Utilizadas

### Core
*   **Vue 3 (Composition API):** Framework reactivo principal.
*   **Vite:** Empaquetador y servidor de desarrollo rápido.
*   **TypeScript:** Tipado estático para mayor robustez en el código.

### Estilos y UI
*   **Bootstrap 5:** Sistema de rejilla y clases de utilidad (Modales, Botones, Alertas).
*   **CSS3:** Animaciones personalizadas (Efecto de nieve `snowflake`, keyframes).
*   **Google Fonts:** Tipografía principal "Tinos".

### Integraciones
*   **Axios:** Cliente HTTP para enviar los datos del formulario al backend.
*   **Google reCAPTCHA v3:** Protección invisible contra bots (integrado en `index.html` y `useAttendanceForm.ts`).
*   **Google Maps Embed:** Mapa de ubicación del salón.

## 4. Funcionalidades Clave

### 4.1. Efecto de Nieve (`App.vue`)
El sitio implementa un sistema de partículas en el ciclo de vida `onMounted` de `App.vue`. Genera copos de nieve SVG dinámicamente en un contenedor fijo (`#snow-container`), creando una atmósfera inmersiva sin afectar el scroll de la página.

### 4.2. Gestión de Asistencia (`AttendanceForm.vue`)
*   **Composable (`useAttendanceForm.ts`):** Separa la lógica de la vista. Maneja el estado reactivo del formulario, el estado de carga (`isLoading`) y el envío de datos.
*   **Validación:** Campos requeridos HTML5 y validación de token reCAPTCHA antes del envío.
*   **Backend:** Envía una petición POST a `enviar-db.php` con los datos: `nombre`, `apellidos`, `sucursal` y `g-recaptcha-response`.

### 4.3. Modal de Confirmación
El formulario se presenta dentro de un modal controlado por la variable reactiva `showModal` en `AppInvitacion.vue`. Al confirmarse el envío exitoso, el modal emite un evento y se cierra automáticamente tras 2 segundos.

## 5. Configuración y Despliegue

### Requisitos
*   **Node.js:** Para ejecutar el entorno de desarrollo y construir el proyecto.
*   **Servidor Web (Apache/Nginx):** Con soporte para **PHP** para procesar el formulario.

### Desarrollo Local
```sh
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

### Compilación para Producción
Para verificar tipos, compilar y minificar los archivos para producción:

```sh
npm run build
```
Esto generará una carpeta `dist/` con los archivos estáticos listos para subir a tu servidor web.

### Linter con ESLint
Para analizar el código y corregir errores de estilo automáticamente:

```sh
npm run lint
```

## 6. Personalización
*   **Cronograma:** Los horarios y textos del evento se encuentran hardcodeados en `src/modules/invitacion/components/AppCronograma.vue`.
*   **Sucursales:** Las opciones del select (Tampico, Madero, etc.) se definen en el array `sucursales` dentro de `src/modules/invitacion/components/AttendanceForm.vue`.
*   **Imágenes:** Los recursos gráficos se encuentran en `src/assets/images/`.

## 7. Notas de Implementación
*   **Backend PHP:** El archivo `enviar-db.php` debe estar configurado en la raíz del servidor para recibir las peticiones POST del formulario.
*   **ReCAPTCHA:** Recuerda configurar tus claves de API (Site Key) en el `index.html` y la Secret Key en el backend para que la validación funcione correctamente.
