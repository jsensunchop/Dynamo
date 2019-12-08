import axios from 'axios'

const axiosInstance = axios.create({
    //request timeout
    timeout: 3000,
    headers: {'authorization': `Bearer ${(localStorage.getItem('vue-meetup') || '')}`}
})

export default axiosInstance