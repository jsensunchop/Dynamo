import axios from 'axios'

const axiosInstance = axios.create({
    //request timeout
    timeout: 3000,
    headers: {'authorization': `Bearer ${(localStorage.getItem('meetuper-jwt') || '')}`}
})

export default axiosInstance