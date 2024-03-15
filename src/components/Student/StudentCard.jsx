import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import './studentcard.css'
import domain from './domain.js'
import categories from './domain.js';

function ProjectCategoriesCard(props) {
    function handleExplore() {
      props.NameOfCategory(props.domain);
    }
  
    return (
      <div className="container2">
        <div className='categoryURL'>
          <img src={domain[1].image} alt="" />
          <div className="h3-head">
            <h3>{props.domain}</h3>
          </div>
          <Link to="/ProjectPage">
            <button onClick={handleExplore} className='Explore'>
              Explore
            </button>
          </Link>
        </div>
      </div>
    );
  }
  
function ProjectCategories(props){

  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mohdnasar.vercel.app/api/user/faculty/projects/`
        );
        // console.log(response.data);
        setFacultyData(response.data); 
   
        // Assuming the response contains an array of faculty data
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      }
    };

    fetchData();
  }, []);

       // Create a Set to store unique projectCategory values
const uniqueCategoriesSet = new Set();

// Iterate through the facultyData array
facultyData.forEach((item) => {
   if(item.projectCategory){
    uniqueCategoriesSet.add(item.projectCategory);
   }
 
});

// Convert the Set back to an array
const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);
// console.log(uniqueCategoriesArray);

    return(
        <div className='bigcontainer'>
            {/* <h1>Project Categories</h1> */}
            
            {
                uniqueCategoriesArray.map((item, index)=>{
                  console.log(item);
                    return(
                        <ProjectCategoriesCard
                        key ={index}
                        NameOfCategory = {props.getNameOfCategory}
                         domain={item}
                        //  bimage={item.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjectCategories;
