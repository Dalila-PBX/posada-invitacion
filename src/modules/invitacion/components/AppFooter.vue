<script setup lang="ts">

</script>

<template>
  <section class="text-center">
    <div class="container">
      <div class="row justify-content-center mt-xl-5">
        <div class="col-6">
          <img
              src="@/assets/images/Recurso_invitacion_banner5_imagen1.png"
              class="img-izq w-100  h-auto"
              alt=""
            />
        </div>
        <div class="col-6">
          <img
              src="@/assets/images/Recurso_invitacion_banner5_imagen2.png"
              class="img-der w-75 h-auto"
              alt=""
            />
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
  .img-izq {
  object-fit: cover;
  transform: scale(1.3);
  margin-top: 50px;

}
.img-der {
  object-fit: cover;
  transform: scale(1.3);
  margin-top: 40px;


}



@media (max-width: 576px) {
  .img-izq {
    width: 100%;
    transform: scale(1.1);
    margin-top: 20px;
    margin-left: -30px;
  }
  .img-der {
    transform: scale(1.1);
    margin-left: -30px;
    margin-top: 20px;
  }
}

@media (min-width: 578px) {
.img-izq {

  margin-left: -50px;
}
}

@media (min-width: 769px) {
.img-izq {
  margin-left: -80px;
}
}
</style>
