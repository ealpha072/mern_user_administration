import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './componenets/Landing'
import RegisterForm from './componenets/Register'
import LoginForm from './componenets/Login'

const App = () => {
    return(
        <Router >
            <Routes >
                <Route path='/' element={<Landing />} />
                <Route path='/register' element={<RegisterForm />} />
                <Route path='/login' element={<LoginForm />} />
            </Routes>
        </Router>
       
    )
}

export default App