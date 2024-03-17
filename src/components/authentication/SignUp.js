import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import nodemailer from 'nodemailer';
// const nodemailer = require('nodemailer');
import './styl.css'



function SignUp(){

    function handleOTP(){     

        // async function sendEmail(subject, message, fromEmail, toEmail, password) {
        //     let transporter = nodemailer.createTransport({
        //         service: 'gmail',
        //         auth: {
        //             user: fromEmail,
        //             pass: password
        //         }
        //     });
        
        //     let info = await transporter.sendMail({
        //         from: fromEmail,
        //         to: toEmail,
        //         subject: subject,
        //         text: message
        //     });
        
        //     console.log("Message sent: %s", info.messageId);
        // }
        
        // // Email details
        // const myEmail = "champ12bro@gmail.com";
        // const password = "usepmdegmybidofa";
        // const toEmail = "kartik22@iitk.ac.in";
        // const subject = "Hello Nasar";
        // const message = "I'm bsdk nasar .";
        
        // // Sending email
        // sendEmail(subject, message, myEmail, toEmail, password)
        //     .then(() => console.log("Email sent successfully"))
        //     .catch(error => console.error("Error occurred: ", error));
        
        

  }


   const [data, setData] =useState({
       studentName:"",
       roll : "",
       email: "",
       skills: "",
       experiences: "",
       password: "",
       confirmPassword: "",
       
   })
   const [name, setName] = useState("");
   const [roll, setRoll] = useState("");
   const [email, setEmail] = useState("");
   const [cpi, setCpi] = useState("");
   const [resumeLink, setResumeLink] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [OTP, setOTP] = useState("");

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
    setName(data.studentName);
    setRoll(data.roll);
    setEmail(data.email);
    setCpi(data.cpi);
    setResumeLink(data.resumeLink);
    setPassword(data.password);
    setConfirmPassword(data.confirmPassword);
    setData(
        {
            studentName:"",
            roll : "",
            email: "",
            cpi: "",
            resumeLink: "",
            password: "",
            confirmPassword: "",
            
        }
    )
   }


    return(
        <>
        <div className='login-position'>
        <div className='login-box-2'>
            <div className='login-heading'>REGISTER</div>
              <div className='cont2'>
                 <div className='input-field' >
                    <input onChange={handleChange} value={data.studentName} name='studentName' type="text" required="required" />
                    <label>Student Name</label>
                 </div>
                 <div className='input-field'>
                    <input  onChange={handleChange} value={data.roll} name='roll' type="text" required="required" /> 
                    <label>Roll No</label>
                 </div>
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
                    <input  onChange={handleChange} value={data.cpi} name='cpi' type="text"required="required"/> 
                    <label>Cpi</label>
                 </div>
                 <div className='input-field'>
                      <input  onChange={handleChange} value={data.resumeLink} name='resumeLink' type="text" required="required"/> 
                      <label>Resume drive link</label>
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
                <button onClick={handleClick} className='btn'>SignUp</button>
                <div className="sign-karo-box">
                 <span id="backtologin"> <p id="already-registered">Already Registered?</p>
                  </span>
                   <Link id="login-link" className="a" to="/SignIn">SignIn</Link>
                   </div>
                 
            </div>
            </div>
        </>
    )
}
export default SignUp