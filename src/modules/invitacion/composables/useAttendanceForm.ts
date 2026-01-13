// objeto `grecaptcha` que Google añade a la ventana global.
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

import { ref, reactive } from 'vue'
import axios from 'axios'

// La interfaz del formulario
import type { AttendanceFormState } from '../interfaces/attendance-form-state.interface'

// --- El Composable ---
export function useAttendanceForm() {
  // --- Estado ---
  const form = reactive<AttendanceFormState>({
    nombre: '',
    apellidos: '',
    sucursal: '',
  })

  const isLoading = ref(false)
  const message = ref('')
  const messageClass = ref('')

  // --- Métodos ---
  const resetForm = () => {
    form.nombre = ''
    form.apellidos = ''
    form.sucursal = ''
    message.value = ''
    messageClass.value = ''
  }

  const submitForm = async (): Promise<boolean> => {
    isLoading.value = true
    message.value = ''
    messageClass.value = ''

    try {
      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA no está cargado.')
      }

      // 1. Obtener token de reCAPTCHA
      const token = await window.grecaptcha.execute('6Lf8KxgsAAAAAC40IkvZU1-vQQPlsqIHyHAZA4nh', {
        action: 'submit_asistencia',
      })

      // 2. Preparar datos
      const formData = new FormData()
      formData.append('nombre', form.nombre)
      formData.append('apellidos', form.apellidos)
      formData.append('sucursal', form.sucursal)
      formData.append('g-recaptcha-response', token)

      // 3. Enviar petición
      const response = await axios.post('enviar-db.php', formData)
      const data = response.data

      if (data.status === 'success') {
        message.value = data.message
        messageClass.value = 'alert-success'
        // No reseteamos el formulario aquí, dejamos que el componente decida
        return true // Devolvemos 'true' en caso de éxito
      } else {
        message.value = data.message || 'Ocurrió un error.'
        messageClass.value = 'alert-danger'
        return false // Devolvemos 'false' en caso de error
      }
    } catch (error) {
      console.error('Error en la petición:', error)
      message.value = 'Error de conexión con el servidor. Intenta de nuevo.'
      messageClass.value = 'alert-danger'
      return false
    } finally {
      isLoading.value = false
    }
  }

  // --- Exposición ---
  // Devolvemos todo lo que el componente necesita para funcionar
  return {
    // Estado
    form,
    isLoading,
    message,
    messageClass,

    // Métodos
    submitForm,
    resetForm,
  }
}
