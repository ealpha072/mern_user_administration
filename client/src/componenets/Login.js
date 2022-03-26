import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
	const [formData, setFormData] = useState({email:'', password:''})

	const handleInputValueChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]:e.target.value
		})
	}

	const handleFormSubmit  = () => {
		const existingUser = {
			email:formData.email,
			password:formData.password
		}
		console.log(existingUser)
	}

    return(
        <div className={"card col-10 col-md-8 col-lg-4"}>
			<div>
				<Link to={'/'}>Back home</Link>
				<p>Dont have an account ? <Link to={'/register'}> Sign up</Link> </p>
			</div>
			<form className={'card-body'} onSubmit={handleFormSubmit}>
				<h4 className={"text-center"}>Login</h4>
				
				<div className={"form-group input-group mb-3"}>
					<input type="email" className={"form-control"} placeholder="Enter email" value={formData.email} onChange={handleInputValueChange} required />					
				</div>
								
				<div className={"form-group input-group mb-3"} >
					<input type="password" className={"form-control"} placeholder="Password" value={formData.password} onChange={handleInputValueChange} required />
				</div>
				<small id="emailHelp" className={"form-text text-muted"} ></small>

				<div className={"row"}>
					<div className={"col"}>
						<button type="submit" className={"btn btn-secondary"} >LOGIN</button>
					</div>
				</div>
			</form>
        </div>
    )
}

export default LoginForm