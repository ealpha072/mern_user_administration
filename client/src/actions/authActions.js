import axios from "axios";
import setAuthToken from "../utils/setAuthTokens";
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

//REGISTER USER WITH AXIOS
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('api/users/register', userData)
        .then(response => history.push('/login')) //redirects to ligin page afer register
        .catch(error => dispatch({type:GET_ERRORS, payload:error.response.data}))

}

export const userLoading = () => {
    return{
        type:USER_LOADING
    }
}

//login user
export const loginUser = (userData) => dispatch => {
    axios
        .post('api/users/login', userData)
        .then(response => {
            //save to local storage
            const {token} = response.data
            localStorage.setItem('jwtToken', token)
            //set token to auth header
            setAuthToken(token)
            //decode token to get data
            const decoded = jwt_decode(token)
            //set current user
            dispatch({type:SET_CURRENT_USER, payload:decoded})
        })
        .catch(error => dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        }))
}

//log user out
export const logOutUser = () => dispatch => {
    localStorage.removeItem('jwtToken')
    //remove from header
    setAuthToken(false)
    //set current user to empty object setting isAuthenticated to false
    dispatch({
        type:SET_CURRENT_USER
    })
}