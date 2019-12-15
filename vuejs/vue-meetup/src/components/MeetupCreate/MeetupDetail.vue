<template>
  <form @input="emitFormData">
    <div class="field">
      <label class="title m-b-sm">Elija un titulo</label>
      <input v-model="form.title"
             @blur="$v.form.title.$touch()"
             class="input"
             type="text"
             placeholder="Ingrese un titulo">
      <div v-if="$v.form.title.$error">
        <span v-if="!$v.form.title.required" class="help is-danger">Debe elegir un titulo</span>
      </div>
    </div>
    <div class="field">
      <label class="title m-b-sm">Fecha de inicio</label>
      <datepicker @input="setDate"
                  :disabledDates="disabledDates"
                  :input-class="'input'"
                  :placeholder="new Date | formatDate"></datepicker>
      <div v-if="$v.form.startDate.$error">
        <span v-if="!$v.form.startDate.required" class="help is-danger">Debe elegir una fecha de inicio</span>
      </div>
    </div>
    <div class="field">
      <label class="title m-b-sm">Desde</label>
      <input v-model="form.timeFrom"
             @blur="$v.form.timeFrom.$touch()"
             class="input"
             type="text"
             placeholder="Time From">
    </div>
    <div class="field">
      <label class="title m-b-sm">Hasta</label>
      <input v-model="form.timeTo"
             @blur="$v.form.timeTo.$touch()"
             class="input"
             type="text"
             placeholder="Time to">
    </div>
    <div class="field">
      <label class="title m-b-sm">Porfavor elija una categoria.</label>
      <div class="m-b-lg">
        <div class="select">
          <!-- TODO: Get Here Categories -->
          <select v-model="form.category" 
                  @blur="$v.form.category.$touch()"
                  @change="emitFromData">
            <option v-for="category of categories"
                    :value="category"
                    :key="category.id">{{category.name}}</option>
          </select>
        </div>
        <div v-if="$v.form.category.$error">
          <span v-if="!$v.form.category.required" class="help is-danger">Debe elegir una categoria</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  import Datepicker from 'vuejs-datepicker'
  import moment from 'moment'
  export default {
    components: {
      Datepicker
    },
    data () {
      return {
        disabledDates: {
          customPredictor: function(date) {
            const today = new Date()
            const yesterday = today.setDate(today.getDate() -1)
            return date < yesterday
          }
        },
        form: {
          title: null,
          startDate: new Date(),
          timeTo: null,
          timeFrom: null,
          category: null
        }
      }
    },
    validations: {
      form: {
        title: { required },
        startDate: { required },
        category: { required },
        timeTo: { required },
        timeFrom: { required }
      }
    },
    computed: {
      categories () {
        return this.$store.state.categories.items
      }
    },
    methods: {
      emitFormData (){
        this.$emit('stepUpdated', {data: this.form, isValid: !this.$v.$invalid})
      },
      setDate (date) {
        this.form.startDate=moment(date).format()
        this.emitFormData()
      },
    }
  }
</script>

<style scoped>
  .time-picker {
    display: block;
  }
</style>