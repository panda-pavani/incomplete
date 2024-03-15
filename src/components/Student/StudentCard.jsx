import React, { useState } from 'react'
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
          <img src={props.bimage} alt="" />
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
    return(
        <div className='bigcontainer'>
            {/* <h1>Project Categories</h1> */}
            
            {
                domain.map((item, index)=>{
                    return(
                        <ProjectCategoriesCard
                        key ={index}
                        NameOfCategory = {props.getNameOfCategory}
                         domain={item.domain}
                         bimage={item.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjectCategories;
