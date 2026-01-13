<script setup lang="ts">
import { useAttendanceForm } from '../composables/useAttendanceForm'

// Importamos la interfaz desde su propio archivo
import type { Sucursal } from '../interfaces/sucursal.interface'

// 1. Emisión de eventos
// declara que este componente puede emitir un evento 'success'.
const emit = defineEmits(['success'])



// 1. Usamos nuestro composable para obtener toda la lógica y el estado
const {
  form,
  isLoading,
  message,
  messageClass,
  submitForm,
  resetForm
} = useAttendanceForm()


// 2. Creamos un "manejador" que llame a la lógica del composable
const handleFormSubmit = async () => {
  const success = await submitForm() // Llama al método del composable
  if (success) {
    emit('success') // Notifica al padre
    // El componente decide cuándo resetear el formulario
    setTimeout(() => {
      resetForm()
    }, 2100) // Un poco más que el modal para que no se vea el reinicio
  }
}


const sucursales: Sucursal[] = [
  { label: 'Tampico', value: 'Tampico' },
  { label: 'Cd. Madero', value: 'Madero' },
 
];



</script>

<template>
  <div class="p-3">
    <!-- formulario con clases de Bootstrap -->
    <form @submit.prevent="handleFormSubmit">
      <!--detecta el evento submit, previene el recargo de la pag y le asigna el metodo submitForm()-->
      <!-- Campo Nombre(s) -->
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre(s):</label>
        <input
          type="text"
          id="nombre"
          v-model="form.nombre"
          class="form-control"
          placeholder="Escribe tu Nombre"
          required
        />
      </div>

      <!-- Campo Apellidos -->
      <div class="mb-3">
        <label for="apellidos" class="form-label">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          v-model="form.apellidos"
          class="form-control"
          placeholder="Escribe tus Apellidos"
          required
        />
      </div>

      <!-- Campo Sucursal -->
      <div class="mb-3">
        <label for="sucursal" class="form-label">Sucursal:</label>
        <select id="sucursal" v-model="form.sucursal" class="form-select" required>
          <option value="" disabled>Escoge una opción...</option>
          <option v-for="sucursal in sucursales" :key="sucursal.value" :value="sucursal.value">
            {{ sucursal.label}}
          </option>
        </select>
      </div>

      <!-- Widget de reCAPTCHA -->
      <button type="submit" :disabled="isLoading" class="btn btn-danger btn-lg w-100 mt-3">
        <span
          v-if="isLoading"
          class="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        {{ isLoading ? 'Enviando...' : 'Confirmar Asistencia' }}
      </button>

      <!-- Mensaje de Respuesta (Clases de Alerta de Bootstrap) -->
      <div v-if="message" :class="['alert mt-3', messageClass]" role="alert">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<style scoped>
.btn-danger {
  background-color: #ff5e5e !important; /* Rojo temático */
  border-color: #ff5e5e !important;
}
</style>
