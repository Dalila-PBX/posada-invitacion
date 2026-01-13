<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from './modules/invitacion/components/AppHeader.vue'
import AppInvitacion from './modules/invitacion/components/AppInvitacion.vue'
import AppVideo from './modules/invitacion/components/AppVideo.vue'
import AppCronograma from './modules/invitacion/components/AppCronograma.vue'
import AppFooter from './modules/invitacion/components/AppFooter.vue'

onMounted(() => {
  // 1. Crear un contenedor fijo para la nieve
  const snowContainer = document.createElement('div')
  snowContainer.id = 'snow-container'
  document.body.appendChild(snowContainer)


  const TOTAL_SNOWFLAKES = 25

  function createSnowflake() {
    const snowflake = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    snowflake.setAttribute('class', 'snowflake')
    snowflake.setAttribute('width', '20')
    snowflake.setAttribute('height', '20')
    snowflake.setAttribute('viewBox', '0 0 24 24')

    // Posición y animación aleatorias
    snowflake.style.left = Math.random() * 100 + 'vw'
    snowflake.style.animationDuration = Math.random() * 8 + 7 + 's' // Duración entre 7 y 15 segundos
    snowflake.style.animationDelay = Math.random() * 5 + 's'
    snowflake.style.opacity = (Math.random() * 0.5 + 0.3).toString() // Opacidad entre 0.3 y 0.8

    // SVG de un copo de nieve más tradicional
    snowflake.innerHTML = `
      <path fill="white" d="M22.1 9.2h-3.9l-2-3.5 3.9-2.2c.4-.2.5-.8.3-1.2-.2-.4-.8-.5-1.2-.3L17 3.2 15.8 1c-.2-.4-.8-.5-1.2-.3-.4.2-.5.8-.3 1.2l1.2 2.2-2.3 3.9-2.3-3.9 1.2-2.2c.2-.4 0-.9-.3-1.2-.4-.2-.9 0-1.2.3L9.2 3.2 7 .2c-.4-.2-.9 0-1.2.3-.2.4 0 .9.3 1.2l3.9 2.2-2 3.5H4.1c-.5 0-.9.4-.9.9s.4.9.9.9h3.9l2 3.5-3.9 2.2c-.4.2-.5.8-.3 1.2.2.4.8.5 1.2.3l2.2-1.2 1.2 2.2c.2.4.8.5 1.2.3.4-.2.5-.8.3-1.2L10.9 17l2.3-3.9 2.3 3.9-1.2 2.2c-.2.4 0 .9.3 1.2.4.2.9 0 1.2-.3l1.2-2.2 2.2 1.2c.4.2.9 0 1.2-.3.2-.4 0-.9-.3-1.2L17 14.8l2-3.5h3.9c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z"/>
    `

    // 2. Añadir el copo al contenedor fijo, no al body
    snowContainer.appendChild(snowflake)

    snowflake.addEventListener('animationend', () => {
      snowflake.remove()
      createSnowflake() // Crear un nuevo copo para un efecto infinito
    })
  }

  for (let i = 0; i < TOTAL_SNOWFLAKES; i++) {
    setTimeout(createSnowflake, i * 300) // Esparcir la creación inicial
  }
})
</script>

<template>
  <AppHeader />
  <AppVideo />
  <AppInvitacion />
  <AppCronograma />
  <AppFooter />
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  background-image: url('@/assets/images/recurso_invitacion_fondo.png');
  background-size: cover; /* Para que la imagen cubra toda la pantalla */
  font-family: 'Tinos', serif; /* <-- Aplicar la nueva fuente a todo el sitio */
  /* font-size: 8px; */
  overflow-x: hidden; /* Evita el scroll horizontal por los copos */
}

/* 3. Estilos para el contenedor de la nieve */
#snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* Para no interferir con los clics */
  z-index: 9999; /* Asegurar que esté por encima de todo */
}

.snowflake {
  position: absolute;
  top: -20px; /* Empezar fuera de la pantalla */
  animation: fall linear infinite;
  will-change: transform, opacity;
}

@keyframes fall {
  0% {
    transform: translateY(0vh) translateX(0vw) rotate(0deg);
  }
  20% {
    transform: translateY(20vh) translateX(5vw) rotate(60deg);
  }
  40% {
    transform: translateY(40vh) translateX(-5vw) rotate(120deg);
  }
  60% {
    transform: translateY(60vh) translateX(5vw) rotate(180deg);
  }
  100% {
    transform: translateY(105vh) translateX(0vw) rotate(360deg);
  }
}
</style>
