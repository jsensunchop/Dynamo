<template>
  <div>
    <h1 class="title m-b-sm">Please confirm entered data</h1>

    <div class="content">
      <div >
        <span class="result-title">
        Ubicación
        </span>
        <p>{{meetupToCreate.location}}</p>
      </div>
      <div>
        <span class="result-title">
        Titulo del Meetup
        </span>
        <p>{{meetupToCreate.title}}</p>
      </div>
      <div>
        <span class="result-title">
        Fecha de Inicio
        </span>
         <p>{{meetupToCreate.startDate | formatDate}}</p>
      </div>
      <div>
        <span class="result-title">
        Desde
        </span>
        <p>{{meetupToCreate.timeFrom}}</p>
      </div>
      <div>
        <span class="result-title">
        Hasta
        </span>
        <p>{{meetupToCreate.timeTo}}</p>
      </div>
      <div>
        <span class="result-title">
        Categoria
        </span>
        <p>{{meetupToCreate.category.name}}</p>
      </div>
      <div>
        <span class="result-title">
        Image
        </span>
        <p>{{meetupToCreate.image}}</p>
      </div>
      <div>
        <span class="result-title">
        Info
        </span>
        <p>{{meetupToCreate.shortInfo}}</p>
      </div>
      <div>
        <span class="result-title">
        Descripción
        </span>
        <p>{{meetupToCreate.description || "Indefinido"}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      meetupToCreate: {
        required: true,
        type: Object
      }
    },
    validations: {

    }
  }
</script>

<style scoped>
  .result-title {
    font-size: 29px;
    font-weight: bold;
  }
  .result-title + p {
    font-size: 20px;
  }
</style>