import React, {useState} from "react";

const SignUp = () => {

    const [user, setUser] = useState({email: "", password: ""})

    const handleChange = e => {
        console.log(user)
        setUser({
            [e.target.value]: e.target.value
        })
    }

  return (

    <div className='container-sign-in'>
        <h2>Sign-Up</h2>
        <form>
            <input
                name = "email"
                type = "email"
                placeholder = "Enter Email"
                onChange = {handleChange}
                value = {user.email}
            />
             <input
                name = "password"
                type = "password"
                placeholder = "Enter Password"
                onChange = {handleChange}
                value = {user.password}
            />
            <button>Sign Up</button>
        
        </form>
    </div>
  )
}

export default SignUp;
