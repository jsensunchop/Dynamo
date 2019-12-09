<template>
  <div>
    <h1 class="title m-b-sm">Cual es la ubicación de tu Meetup?</h1>
    <div class="m-b-lg">
      <span class="subtitle">Bogotá, COL</span>
      <a>(cambiar ubicación)</a>
      <input v-model="form.location" type="text" class="input">
      <div v-if="$v.form.location.$error">
        <span v-if="!$v.form.location.required" class="help is-danger">La ubicación es requerida</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
         form: {
           location: null
        }
      }
    },
    validations: {
      form: {
        location: required
      }
    }
  }
</script>

<style scoped>