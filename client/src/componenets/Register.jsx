import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
      <div class="app-container d-flex">
          <div class="left side">
              <h2>Sign up</h2>
              <div class="socials d-flex">
                  <div><i class="fa fa-twitter"></i></div>
                  <div><i class="fa fa-envelope"></i></div>
                  <div><i class="fa fa-facebook"></i></div>
              </div>
              <form action="">
                  <div class="username">
                      <i class="fa fa-user"></i>
                      <input type="text" name="" id="" placeholder="Username" />
                  </div>
                  <div class="email">
                      <i class="fa fa-envelope"></i>
                      <input type="text" name="" id="" placeholder="Email" />
                  </div>
                  <div class="pass">
                      <i class="fa fa-unlock"></i>
                      <input type="password" name="" id="" placeholder="Password" />
                  </div>
                  <button>Sign up</button>
              </form>
              <div class="register">
                  <h6>Already have an account? Sign in <Link to='/'><em>Here</em></Link></h6>
              </div>
          </div>
          <div class="right side">
              <h1>Hello, friend</h1>
              <p>Enter your personal information to continue</p>
              <Link to='/'><button>Sign in</button></Link>
          </div>
      </div>
  )
}

export default Register