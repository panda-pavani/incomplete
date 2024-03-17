import{ React, useState, useEffect }from 'react'
import axios from 'axios';
import './prof.css'
// import '../../pages/Navbar.css'
import  CseProfData from './main';

function ProfCard(props){
    return(
        <div className='prof-card'>
            <div className='box-1'>
                <div className="prof-dp">
                    <div className='circle'>
                    <img src="users.png" alt="" />
                    </div>
                </div>
                <div className="prof-details">
                    <h2>{props.name}</h2>
                    <p>{props.desig}</p>
                   <p>{props.phone}</p>
                   <p>{props.address}</p>
                   <p>{props.email}</p>
                  
                </div>
            </div>
            <div className='box-2'>
                <p><span>Research Areas:- </span>{props.research}</p>
            </div>
        </div>
    );
}


function Prof(props) {

    const [facultyData, setFacultyData] = useState([]);
    const [kartik, setKartik] = useState("Computer Science And Engineering")
       const url = `https://mohdnasar.vercel.app/api/user/faculty/?department=${props.departmentName}`;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            url
          );
          // console.log(response.data);
          setFacultyData(response.data);       
        } catch (error) {
          console.error("Error fetching faculty data:", error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div id='faculty-page' className='faculty-page'>
        {
            facultyData.map((item) => {
              return (
               <ProfCard 
               department ={item.department}
               key ={item.name}
               name = {item.name} 
                desig = {item.designation}
                phone ={item.contact}
                address = {item.address}
                email = {item.email}
                research ={item.research}
               />
              )
            })
        }
    
    </div>
  )
}

export default Prof;
