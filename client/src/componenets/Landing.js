import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <div className={"card col-10 col-md-8 col-lg-4"}>
            <div>
                <p className='text-center'>
                    Welcome to my MERN stack User Authentication application with JWTS and Passport
                </p>
            </div>
            <div className={"row"}>
                <div className="col">
                    <Link to={"/register"} className={"btn btn-secondary btn-md"}>
                        REGISTER
                    </Link>
                </div>
                <div className={"col"}>
                    <Link to={"/login"} className={"btn btn-primary btn-md"}>
                        LOGIN
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing

