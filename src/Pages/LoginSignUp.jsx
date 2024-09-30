import React from 'react'
import './CSS/LoginSignUp.css'
const LoginSignUp = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <div> <input type="text" placeholder='Your Name' /></div>
                    <div> <input type="text" placeholder='Email Address' /></div>
                    <div><input type="password" placeholder='password' /></div>

                </div>
                <div><button>Continue</button></div>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>ByContinuing, i agree to thr terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp