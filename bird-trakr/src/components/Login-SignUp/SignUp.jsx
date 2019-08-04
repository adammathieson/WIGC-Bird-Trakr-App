import React, {useState} from "react";

import './SignUp.scss';

const SignUp = () => {

    const [user, setUser] = useState({email: "", password: ""})

    const handleChange = e => {
        console.log(user)
        setUser({
            [e.target.value]: e.target.value
        })
    }

  return (

    <div className='container-signUp'>
        <h2>Sign Up</h2>
        <form className="signUp-form">
            <input
                name="email"
                type="email"
                placeholder="Enter Email"
                onChange={handleChange}
                value={user.email}
                className="signUp-input signUp-form-el"
            />
             <input
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
                value={user.password}
                className="signUp-input signUp-form-el"

            />
            <button className="signUp-btn signUp-form-el">Sign Up</button>
        
        </form>
    </div>
  )
}

export default SignUp;
