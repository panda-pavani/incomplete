import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styl.css';

function ForgotPassword(){
    const [data, setData] =useState({
        email: "",
        password: "",
        confirmPassword: "",      
    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [OTP, setOTP] = useState("");
    
    function handleOTP(){

    }
    
    function handleChange(e){
        const {name, value} = e.target;
        if(name ==="OTP"){
         setOTP(value)
        }
        setData((prevValue) => {
             return {
                 ...prevValue,
                 [name] :value
             }
        })
    }

    function handleClick(){
        setEmail(data.email);
        setPassword(data.password);
        setConfirmPassword(data.confirmPassword);
        setData({
            email: "",
            password: "",
            confirmPassword: "",           
        })
        if(password == confirmPassword){
            <Link to="/SignIn"> </Link>
        }
    }

    return(
        <div className='login-position'>
        <div className='login-box-2'>
            <div className='reset-heading'>RESET PASSWORD</div>
              <div className='cont2'>
                 <div className='input-field'>
                    <input  onChange={handleChange} value={data.email} name='email' type="email" required="required" /> 
                    <label>Enter Your Gmail</label>
                 </div>
                 <button onClick={handleOTP} className='otpButton'>Send OTP</button>
                 <div className='input-field'>
                    <input  onChange={handleChange} value={OTP} name='OTP' type="text" required="required" /> 
                    <label>Enter OTP</label>
                 </div>
                 <div className='input-field'>
                    <input  onChange={handleChange} value={data.password} name='password' type="password" required="required" /> 
                    <label>Create-Password</label>
                 </div>
                 <div className='input-field'>
                    <input onChange={handleChange} value={data.confirmPassword} name='confirmPassword' type="password" required="required" /> 
                    <label>Confirm-Password</label>
                 </div>
                </div>
                <button onClick={handleClick} className='btn'>Reset Password</button>    
        </div>
        </div>
    )
}

export default ForgotPassword;