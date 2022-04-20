import React from 'react'

const Landing = () => {
  return (
    <div className="app-container d-flex">
          <div className="left side">
              <h2>Sign in</h2>
              <div className="socials d-flex">
                  <div><i className="fa fa-twitter"></i></div>
                  <div><i className="fa fa-envelope"></i></div>
                  <div><i className="fa fa-facebook"></i></div>
              </div>
              <form action="">
                  <div className="email">
                      <i className="fa fa-envelope"></i>
                      <input type="text" name="" id="email-input" placeholder="Email" />
                  </div>
                  <div className="pass">
                      <i className="fa fa-unlock"></i>
                      <input type="password" name="" id="pass-input" placeholder="Password" />
                  </div>
                  <h6>Forgot Password ? </h6>
                  <button>Sign in</button>
              </form>
              <div className="register">
                  <h6>Dont have an account? Register <a href="/#">Here</a> </h6>
              </div>
          </div>
          <div className="right side">
              <h1>Hello, friend</h1>
              <p>Enter your personal information to continue</p>
              <button>Sign up</button>
          </div>
    </div>
  )
}

export default Landing