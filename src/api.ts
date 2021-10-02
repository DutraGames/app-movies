import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const key = '093c9e96e729cae47daac6f552bf9d92'

export default api