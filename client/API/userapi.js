import axios from "axios";

const baseUrl = 'http://localhost:5000/'

export const register = async (object) =>{
    const request = await axios.post(`${baseUrl}/register`, object)
    return request.data
}