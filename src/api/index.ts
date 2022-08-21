import axios from 'axios'

const URL = 'https://hidevshackaton.herokuapp.com/'

const ApiInstance = axios.create({
    baseURL: URL
})

export default ApiInstance