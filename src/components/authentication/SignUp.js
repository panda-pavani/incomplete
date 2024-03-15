import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './styl.css'


function SignUp(){
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
   const [skills, setSkills] = useState("");
   const [experiences, setExperinces] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   function handleChange(e){
   const {name, value} = e.target;
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
    setSkills(data.skills);
    setExperinces(data.experiences);
    setPassword(data.password);
    setConfirmPassword(data.confirmPassword);
    setData(
        {
            studentName:"",
            roll : "",
            email: "",
            skills: "",
            experiences: "",
            password: "",
            confirmPassword: "",
            
        }
    )
   }


    return(
        <>
        <div className='login-position'>
        <div className='login-box'>
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
                    <label>Enter Your IITK Mail Id</label>
                 </div>
                 <div className='input-field'>
                    <input  onChange={handleChange} value={data.skills} name='skills' type="text"required="required"/> 
                    <label>Your Skills</label>
                 </div>
                 <div className='input-field'>
                      <input  onChange={handleChange} value={data.experiences} name='experiences' type="text" required="required"/> 
                      <label>Experiences</label>
                 </div>
                 {/* <div className='input-field'>
                      <input type="file" /> 
                      <label>Upload your Resume</label>
                 </div> */}
                   <div className='input-field'>
                       <input  onChange={handleChange} value={data.password} name='password' type="password" required="required" /> 
                       <label>Create-Password</label>
                   </div>
                   <div className='input-field'>
                        <input onChange={handleChange} value={data.confirmPassword} name='confirmPassword' type="password" required="required" /> 
                        <label>Confirm-Password</label>
                   </div>
                </div>
                 <span id="backtologin"> <p id="already-registered">Already Registered?</p>
                  </span>
                   <Link id="login-link" className="a" to="/SignIn">SignIn</Link>
                  <button onClick={handleClick} className='btn'>SIGNUP</button>
                   
                
            </div>
            </div>

        {/* </div> */}
        </>
    )
}
export default SignUp