import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './studentcard.css'
import domain from './domain.js'
import categories from './domain.js';

function ProjectCategoriesCard(props) {
   // const [urlCategory, setUrlCategory]=useState(props.image)
    return (
        <div className="bigcontainer1">
            <div className="container2" >
            <div className="category-box">
                <div className='categoryURL' style={{backgroundImage:`url(${props.bimage})`}} >
                    <h3>{props.domain}</h3>
                    <Link to="/ProjectPage"><button className='Explore'>Explore </button></Link>
                </div>
            </div>
        </div>
        </div>
        
    );
}

function ProjectCategories(){
    return(
        <div className='bigcontainer'>
            {/* <h1>Project Categories</h1> */}
            
            {
                domain.map((item)=>{
                    return(
                        <ProjectCategoriesCard
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
