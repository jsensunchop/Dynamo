<template>
  <div>
    <AppHero />
    <div class="container">
      <section class="section">
      <div class="m-b-lg">
        <h1 class="title is-inline">Books For You</h1>
        <AppDropdown />
        <button class="button is-primary is-pulled-right m-r-sm">Publicaciones Recientes</button>
        <router-link :to="{name: 'PageMeetupFind'}" 
                     class="button is-primary is-pulled-right m-r-sm">Todas las Publicaciones
        </router-link>
      </div>
      <div class="row columns is-multiline">
        <!--iterar de aca-->
        <MeetupItem v-for="meetup in meetups" :key="meetup._id" :meetup="meetup"/>
      </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">Categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <!--Categorias-->
            <CategoryItem v-for="category in categories" :key="category._id" :category="category"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import CategoryItem from '@/components/CategoryItem'
import MeetupItem from '@/components/MeetupItem'
import { mapActions, mapState, mapGetters } from 'vuex'
  export default {
    components: {
      CategoryItem,
      MeetupItem
    },
    data(){
      return {
        meetups: [],
        categories: []
      }
    },
    computed: {
      meetups (){
        return this.$store.getters['meetups']
      },
      categories (){
        return this.$store.getters['categories']
      }
    },
    created (){
      //this.$store.dispatch('fetchMeetups')
      //this.$store.dispatch('fetchCategories')
      axios.get('/api/v1/meetups')
       .then(res => {
         this.meetups=res.data
       })
      
      axios.get('/api/v1/categories')
       .then(res => {
         this.categories=res.data
       })
    }
  }
</script>

<style scoped>
</style>
