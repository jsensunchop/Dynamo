<template>
    <div class="meetup-create-form">
        <div class="current-step is-pulled-right">
            1 of 4
        </div>
        <MeetupLocation />
        <MeetupDetail />
        <MeetupDescription />
        <MeetupConfirmation />

        <progress class="progress" :value="100" max="100"> 100%</progress>
        <div class="controll-btns m-b-md">
            <button class="button is-primary m-r-sm">Atras</button>
            <button class="button is-primary">Siguiente</button>
        </div>
        <pre><code>{{form}}</code></pre>
    </div>
</template>

<script>
import MeetupLocation from './MeetupLocation'
import MeetupDetail from './MeetupDetail'
import MeetupDescription from './MeetupDescription'
import MeetupConfirmation from './MeetupConfirmation'
export default {
    components: {
    MeetupLocation,
    MeetupDetail,
    MeetupDescription,
    MeetupConfirmation
    },
    data(){
        return{
            form: {
                location: null,
                title: null,
                startDate: null,
                category: null,
                image: null,
                shortInfo: null,
                description: null,
                timeTo: null,
                timeFrom: null
            }
        }
    }
}

</script>

<style scoped>
    .meetup-create-form{
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
        max-width: 840px;
        padding: 24px 16px 8px;
        width: 100%;
    }
</style>