<script setup lang="ts">
/*Creacion variable reactiva showModal para controlar si la ventana emergente es visible o no
  Funcion handleSuccessSubmit que espera el evento del formulario y cuando lo recibe espera 2 seg antes de cambiar el valor de showModal para cerrar el modal*/

import { ref } from 'vue'
import AttendanceForm from './AttendanceForm.vue'

// --- Composition API ---
// 1. Estado Reactivo con ref()
const showModal = ref(false)

const handleSuccessSubmit = () => {
  console.log('Asistencia confirmada. Cerrando modal en 2 segundos.')
  setTimeout(() => {
    showModal.value = false // Para cambiar el valor de un 'ref', usamos .value
  }, 2000)
}
</script>

<template>
  <section id="invitacion">
    <div class="container">
      <div class="text-center mt-3">
        <div class="datos-invitacion d-flex flex-column justify-content-center">
          <div class="position-relative w-100">
            <img
              src="@/assets/images/Recurso_invitacion_banner2_imagen1.png"
              alt="invitacion"
              class="primer-banner w-100 h-auto"
            />
            <div
              class="logo-texto d-flex flex-column justify-content-center align-items-center position-absolute start-50"
            >
              <img
                src="@/assets/images/Recurso_invitacion_banner2_imagen2.png"
                alt="Logo"
                class="logo-invitacion"
              />
              <h2 class="titulo-secundario fw-bold">TE INVITA A SU POSADA 2025</h2>
            </div>
          </div>
          <div class="position-relative w-100">
            <img
              src="@/assets/images/Recurso_invitacion_banner3_imagen1.png"
              alt="invitacion2"
              class="segundo-banner w-100 h-auto"
            />
            <div
              class=" logo-texto d-flex flex-column justify-content-center align-items-center position-absolute start-50 "
            >
              <h1 class="titulo-principal text-light fw-bold mb-0 ">
                Diciembre <span class="numero-grande">19</span> 6:30 pm
              </h1>
              <h1 class="titulo-principal-cafe text-uppercase fw-bold mb-0 mb-xl-2">
                ¡te esperamos!
              </h1>
              <img
                src="@/assets/images/Recurso_invitacion_banner3_imagen2.png"
                alt="salon-img"
                class="logo-invitacion mb-0 mb-xl-3"
              />
              <div class="container">
                <div class="mapa-wrapper mx-auto">
                  <div class="ratio ratio-16x9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.85745653875983!2d-97.85572653561127!3d22.21277122236518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7f70438f33fc1%3A0xdc7cded4f4913cca!2sSal%C3%B3n%20Liberty!5e0!3m2!1ses!2smx!4v1764690824246!5m2!1ses!2smx"
                      width="600"
                      height="450"
                      style="border: 0"
                      allowfullscreen
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                  </div>
                </div>
              </div>
              <h3 class="titulo-tercero-cafe text-uppercase fw-bold mt-xl-3 mt-1 mb-0 mb-xl-3">
                salón liberty
              </h3>
              <p class="text-light mb-0 mb-xl-3  ">
                Calle General César López de Lara 312, Tampico, 89000, Tamps, MX
              </p>
              <a href="#invitacion">
                <button
                  @click="showModal = true"
                  class="btn-confirmar fw-bold w-100 bg-transparent border-0 mb-3"
                >
                  Confirmar Asistencia
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="invitacion.2">
    <div class="coantainer">
      <div class="row justify-content-center text-center">
        <div class="col-sm-6 col-12"></div>
      </div>
    </div>
  </section>

  <!-- Simulación del Modal con v-if -->
  <div
    v-if="showModal"
    class="modal fade show d-block"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">Confirmar Invitación</h5>
          <!-- Botón Cerrar -->
          <button
            type="button"
            class="btn-close btn-close-white"
            @click="showModal = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4">
          <!-- componente del formulario aquí -->
          <AttendanceForm @success="handleSuccessSubmit" />
          <!--comp hijo emite un evento llamado success ejecuta handleSuccessSubmit() -->
        </div>
      </div>
    </div>
  </div>

  <!-- Backdrop del Modal (oscurece el fondo) -->
  <div v-if="showModal" class="modal-backdrop fade show"></div>
</template>

<style scoped>
.primer-banner {
  object-fit: cover;
  transform: scale(1.1);
}

.logo-texto {
  top: 55%;
  transform: translate(-50%, -50%); /* Centra el contenido vertical y horizontalmente */
  width: 70%;
  color: #523a13;
}

.logo-invitacion {
  width: 60%; /* Ancho relativo al contenedor .logo-texto */
  max-width: 500px; /* Un tamaño máximo para pantallas grandes */
  height: auto;
  margin-bottom: 0.7rem;
}

.titulo-secundario {
  /* Usamos clamp() para un tamaño de fuente fluido y responsivo */
  font-size: clamp(0.8rem, 2.5vw, 2rem);
  font-family: 'Tinos', Times, serif;
  letter-spacing: 1px;
}

.segundo-banner {
  object-fit: cover;
  transform: scale(1.17);
  margin-left: -15px;
  margin-top: 20px;
}

.titulo-principal {
  /* Usamos clamp() para un tamaño de fuente fluido y responsivo */
  font-size: clamp(1.1rem, 4vw, 4rem);
  font-family: 'Tinos', Times, serif;
  letter-spacing: 1px;
}

.titulo-principal-cafe {
  color: #523a13;
  font-size: clamp(1.1rem, 4vw, 4rem);
  font-family: 'Tinos', Times, serif;
}

.numero-grande {
  font-size: 1.2em;
}

.mapa-wrapper {
  width: 63%;
  max-width: 500px;
  margin-top: 0.7rem;
}

.titulo-tercero-cafe {
  color: #523a13;
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-family: 'Tinos', Times, serif;
  letter-spacing: 1px;
}

#invitacion p {
  font-family: 'Tinos', Times, serif;
  font-size: clamp(11px, 1.8vw, 1.6rem);
}

.btn-confirmar {
  background-image: url('@/assets/images/Recurso_invitacion_banner1_imagen4.png');
  background-size: contain; /*no se deforma*/
  background-repeat: no-repeat;
  background-position: center;
  font-family: 'Tinos', Times, serif;
  letter-spacing: 1px;
  border: none;
  color: white;
  font-size: clamp(12px, 1.5vw, 2rem);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  cursor: pointer;

  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
   padding-left: 3rem;
  padding-right: 3rem;
}



@media (min-width: 1200px) {
  .logo-invitacion {
    margin-bottom: 1.5rem;
  }
  .texto-invitacion {
    letter-spacing: 6px;
  }
}

@media (min-width: 1000px) {
  .segundo-banner {
    margin-top: 30px;
    margin-left: -40px;
    transform: scale(1.16);
  }
}



@media (max-width: 576px) {
  .btn-confirmar {

    padding-left: 1.4rem;
    padding-right: 1.4rem;

    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
}



@media (min-width: 768px) {
  .logo-texto {
    top: 49%;
  }
}

</style>
