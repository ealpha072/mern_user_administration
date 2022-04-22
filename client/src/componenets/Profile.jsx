import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSelector, logout } from '../redux/userSlice'
import { Link } from 'react-router-dom'

const Profile = () => {
    const dispatch = useDispatch()

    const myState = useSelector(userSelector)
    return (
        <div className='app-container'>
            <div className="profile">
                <h3>Username: <span>{myState.userDetails.username}</span></h3>
                <h3>Email: <span>{myState.userDetails.email}</span></h3>
                <Link to='/'><button onClick={() => dispatch(logout())}>Logout </button></Link> 
            </div>
        </div>
    )
}


export default Profile