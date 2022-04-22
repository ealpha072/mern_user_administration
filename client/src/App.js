import React from 'react'
import Landing from './componenets/Landing'
import Register from './componenets/Register'
import Profile from './componenets/Profile'
import {Routes, Route } from 'react-router-dom'

const App = () => {
    return (
       <Routes>
           <Route path='/' element={<Landing />} />
           <Route path='/register' element={<Register />} />
           <Route path='/profile' element={<Profile />} />
       </Routes>
    )
}

export default App