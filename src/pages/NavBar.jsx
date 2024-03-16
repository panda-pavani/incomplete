import React from "react";
import './Navbar.css';
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";

function NavBar(props){
    const location = useLocation();
    document.documentElement.style.setProperty('--heading-color', 'white');

    if(props.who === "faculty"){
        return(
            <>
         <div className="nav">
            <div className="heading">
                <img className="logo" src="./images/iitk.gif" alt="" />
                <h1>ProfInfo Central</h1>
            </div>
             <ul>
                 
                 <li><Link className="a" to="/">Log Out</Link></li>
                 <li><Link className="a" to="/ContactUs">Contact us</Link></li>
                 <li><Link className="a" to="/Project_list_prof">Projects</Link></li>
                 <li><Link className="a" to="/ProfProfile">Profile</Link></li>
                 <li><Link className="a" to="/Home">Home</Link></li>
           </ul>
           
        </div>
                <Outlet />
        </>
        )
    }else{
        return(
            <>
         <div className="nav">
            <div className="heading">
                <img className="logo" src="./images/iitk.gif" alt="" />
                <h1>ProfInfo Central</h1>
            </div>
             <ul>
                 <li><Link className="a" to="/">Log Out</Link></li>
                 <li><Link className="a" to="/ContactUs">Contact us</Link></li>
                 <li><Link className="a" to="/UserProfile">My Profile</Link></li>
                 <li><Link className="a" to="/Student">Projects</Link></li>
                 <li><Link className="a" to="/Faculty/Cse">Faculty</Link></li>
                 <li><Link className="a" to="/Home">Home</Link></li>
           </ul>
           
        </div>
                <Outlet />
        </>
        )

    }
  
}

export default NavBar;