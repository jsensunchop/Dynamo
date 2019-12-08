import axios from 'axios'

const axiosInstance = axios.create({
    headers: {'authorization': `Bearer ${localStorage.getItem('vue-meetup')}`}
})