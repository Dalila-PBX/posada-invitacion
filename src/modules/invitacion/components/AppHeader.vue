<script setup lang="ts"></script>

<template>
  <section class="text-center">
    <div class="container">
      <div class="row justify-content-center ms-2">
        <div class="col-lg-3 col-md-3 col-sm-3 col-3">
          <img
            src="@/assets/images/Recurso_invitacion_banner1_imagen1.png"
            class="regalos-img-izq w-100 h-auto mt-md-3 mt-lg-5"
            alt=""
          />
        </div>
        <div
          class="col-lg-6 col-md-6 col-sm-6 col-6 d-flex flex-column justify-content-center mt-xl-0 mt-3"
        >
          <div class="d-flex flex-column">
            <img
              src="@/assets/images/Recurso_invitacion_banner1_imagen3.png"
              class="logo-header d-block mx-auto"
              alt=""
            />

            <!-- <a href="#invitacion">
              <button class="btn-confirmar mt-2 mt-md-3 mt-lg-4 mt-xl-5 fw-bold w-100">
                Confirmar Asistencia
              </button>
            </a> -->
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-3">
          <img
            src="@/assets/images/Recurso_invitacion_banner1_imagen2.png"
            class="regalos-img-der w-100 h-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.regalos-img-izq {
  object-fit: cover;
  transform: scale(1.5);
  margin-top: 50px;
}
.regalos-img-der {
  object-fit: cover;
  transform: scale(1.15);
  margin-top: 0px;
}

.logo-header {
  width: 80%;
  object-fit: cover;
}

.btn-confirmar {
  background-image: url('@/assets/images/Recurso_invitacion_banner1_imagen4.png');
  background-size: contain; /*no se deforma*/
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  font-family: 'Tinos', serif;
  letter-spacing: 1px;
  border: none;
  color: white;
  font-size: clamp(12px, 1.5vw, 2rem);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  cursor: pointer;

  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}

/*
  Usamos 991.98px para aplicar este estilo a todo lo que esté por debajo de 'lg'.
*/
@media (max-width: 1199.98px) {
  .container {
    max-width: 100%;
    padding: 0 1rem;
  }
}

@media (max-width: 576px) {
  .regalos-img-izq {
    width: 100%;
    transform: scale(1.7);
    margin-top: 30px;
  }
  .logo-header {
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }

  .btn-confirmar {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .regalos-img-der {
    width: 100%;
    transform: scale(1.2);
    margin-left: -20px;
    margin-top: 10px;
  }
}

@media (min-width: 578px) {
  .regalos-img-der {
    margin-left: -50px;
  }
}
</style>
