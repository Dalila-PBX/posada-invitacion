<script setup lang="ts"></script>

<template>
  <section class="cronograma-section text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <div class="position-relative w-100">
            <img
              src="@/assets/images/Recurso_invitacion_banner4_imagen2.png"
              class="img-izq h-auto d-block mx-auto ms-lg-0"
              alt=""
            />
            <div
              class="logo-texto d-flex flex-column justify-content-center align-items-center position-absolute start-50"
            >
              <p
                class="texto-secundario fw-bold texto-img-izq mt-3 mb-0 mb-xl-3 me-xxl-3 text-uppercase"
              >
                código de vestimenta <br />
                <span class="text-light text-capitalize line"> Semi formal</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-2">
          <div class="position-relative w-100 img-der-container">
            <img
              src="@/assets/images/Recurso_invitacion_banner4_imagen1.png"
              class="img-der h-auto d-block mx-auto ms-lg-0"
              alt=""
            />
            <div
              class="logo-texto-2 d-flex flex-column justify-content-center align-items-center position-absolute start-50"
            >
              <h1 class="titulo-principal-cafe text-uppercase fw-bold mb-0 mb-x-0">Cronograma</h1>
              <h2 class="titulo-secundario text-light fw-bold mb-0">Entrada - 6:30PM</h2>
              <p class="texto-normal text-light mb-xl-3 mb-lg-2 mb-md-5 mb-sm-4">
                Cada paso que des reflejará el espíritu de unidad y celebración en nuestra comunidad
                laboral.
              </p>
              <h2 class="titulo-secundario text-light fw-bold mb-0">Brindis - 8:00PM</h2>
              <p class="texto-normal text-light mb-xl-3 mb-lg-2 mb-md-5 mb-sm-4">
                Mensaje por parte de Dirección General.
              </p>
              <h2 class="titulo-secundario text-light fw-bold mb-0">Cena Navideña - 8:30PM</h2>
              <p class="texto-normal text-light mb-xl-3 mb-lg-2 mb-md-5 mb-sm-4">
                Compartamos momentos de compañerismo en nuestra cena navideña para fortalecer la
                conexión entre colegas.
              </p>
              <h2 class="titulo-secundario text-light fw-bold mb-0">Baile - 10:00PM - 12:30AM</h2>
              <p class="texto-normal text-light mb-xl-3 mb-lg-2 mb-md-5 mb-sm-4">
                ¡Que comience la celebración del equipo! La pista de baile estará abierta para que
                todos disfruten.
              </p>
              <h2 class="titulo-secundario text-light fw-bold mb-0">Cierre de Posada - 1:00AM</h2>
              <p class="texto-normal text-light mb-xl-0 mb-lg-2 mb-2">
                Concluyamos la posada con gratitud y buenos deseos. El cierre será un momento para
                agradecer a cada miembro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cronograma-section {
  margin-top: 100px;
}
.img-izq {
  width: 71%;
}

.img-der {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.logo-texto {
  top: 90%;
  /* Centra el contenido vertical y horizontalmente */
  transform: translate(-50%, -50%);
  width: 100%; /* Hacemos que el contenedor ocupe todo el ancho */
}
.logo-texto-2 {
  top: 48%;
  transform: translate(-50%, -50%);
  width: 80%; /* Hacemos que el contenedor ocupe todo el ancho */
  height: 100%;
}
.img-der-container {
  min-height: 600px; /* Ajusta este valor según necesites más o menos altura */
}

.texto-secundario {
  font-size: clamp(0.8rem, 1.3vw, 1.4rem);
  font-family: 'Tinos', serif;
  color: #523a13;
  letter-spacing: 1px;
}

.texto-img-izq {
  /* Centramos el texto dentro de su contenedor más grande */
  text-align: center;
}

.titulo-principal-cafe {
  color: #523a13;
  font-size: clamp(1.1rem, 3vw, 3rem);
  font-family: 'Tinos', serif;
}

.titulo-secundario {
  font-size: clamp(0.9rem, 2.5vw, 2rem);
  font-family: 'Tinos', serif;
  letter-spacing: 1px;
}
.texto-normal {
  font-family: 'Tinos', serif;
  font-size: clamp(12px, 1.2vw, 1.3rem);
}

@media (min-width: 1000px) {
  .texto-img-izq {
    /* Usamos un margen negativo para mover el texto hacia la izquierda */
    margin-left: -10rem;
  }
}

@media (max-width: 454px) {
  .logo-texto-2 {
    top: 50%;
  }
}

@media (max-width: 575px) {
  .cronograma-section {
    margin-top: 40px;
  }
  .img-izq {
    width: 65%;
  }
  .img-der {
    margin-top: 10px;
    width: 100%;
    height: auto; /* Volvemos al comportamiento por defecto en móvil */
  }
  .img-der-container {
    min-height: auto; /* Quitamos la altura mínima en móvil */
  }
}
</style>
