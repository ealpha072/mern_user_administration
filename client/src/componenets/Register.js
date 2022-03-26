import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword: '',
        errors: {}
    })

    const onInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        
        const newUser = {
            name:formData.name,
            email:formData.email,
            password:formData.password,
            confirmPassword:formData.confirmPassword
        }
        console.log(newUser)
    }

    return(
        <div className={"card col-10 col-md-8 col-lg-4"}>
            <div>
                <Link to={'/'}>
                    Back to home
                </Link>
                <p>Alreday have an account ? <Link to={'/login'}> Login here</Link></p>
            </div>
			<form className={'card-body'} onSubmit={onFormSubmit}>
				<h4 className={"text-center"}>Register to be a member</h4>
				
				<div className={"form-group input-group mb-3"}>
					<input 
                        type="email" 
                        className={"form-control"} 
                        placeholder="Enter email" 
                        value={formData.email} 
                        name='email'
                        onChange={onInputChange} 
                        required 
                    />					
				</div>
				
				<div className={"form-group input-group mb-3"}>				
					<input 
                        type="text" 
                        className={"form-control"} 
                        placeholder="Full name" 
                        value={formData.name} 
                        name='name'
                        onChange={onInputChange} 
                        required />				
				</div>
								
				<div className={"form-group input-group mb-3"} >
					<input 
                        type="password" 
                        className={"form-control"} 
                        placeholder="Password" 
                        value={formData.password} 
                        name='password'
                        onChange={onInputChange} 
                        required 
                    />
				</div>
				<small id="emailHelp" className={"form-text text-muted"} ></small>

				
				<div className={"form-group input-group mb-3"}>
					<input 
                        type="password" 
                        className={"form-control"} 
                        placeholder="Confirm Password" 
                        value={formData.confirmPassword}  
                        name='confirmPassword'
                        onChange={onInputChange} 
                        required 
                    />					
				</div>
				<small id="emailHelp" className={"form-text text-muted"} ></small>

				<div className={"row"}>
					<div className={"col"}>
						<button 
                            type="submit" 
                            className={"btn btn-secondary"} 
                        >
                            Register
                        </button>
					</div>
				</div>
			</form>
        </div>
    )
}

export default RegisterForm
