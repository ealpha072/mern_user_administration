import React from 'react'
import Landing from './componenets/Landing'
import Register from './componenets/Register'
import {Routes, Route } from 'react-router-dom'

const App = () => {
    return (
       <Routes>
           <Route path='/' element={<Landing />} />
           <Route path='/register' element={<Register />} />
       </Routes>
    )
}

export default App