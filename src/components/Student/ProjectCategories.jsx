import React, { useState, useEffect } from "react";
import axios from "axios";
import "./projectcard.css";
import ProjectDetails from "./projectdetails";
import "./ProjectDesc.jsx";
import { Link } from "react-router-dom";

function TotalProjects(props) {
  function expand() {
    const projectDiv = document.getElementById(`project-${props.index}`);
    const button = document.getElementById(`expand-button-${props.index}`);

    if (projectDiv.style.height == "370px") {
      button.innerText = "Show More";
      projectDiv.style.height = "150px";
    } else {
      button.innerText = "Show Less ";
      projectDiv.style.height = "370px";
    }
  }
  const check= props.studentRegistered<props.maxStudents;

  return (
  
    <div id={`project-${props.index}`} className="each-project">
      <h2>{props.name}</h2>
      <p>{props.details}</p>
      <div className="normal-details">
        <h4 style={{ color: "blue" }}>
          Cpi Required:{" "}
          <span style={{ color: "black", fontWeight: "500", fontSize: "15px" }}>
            {props.cpi}
          </span>
        </h4>
        <h4 style={{ color: "blue" }}>
          Pre-Requisite:{" "}
          <span style={{ color: "black", fontWeight: "500", fontSize: "15px" }}>
            {props.preReq}
          </span>
        </h4>
        <button id={`expand-button-${props.index}`} onClick={expand}>
          Show More
        </button>
      </div>
      <div className="side-karo">
        <div className="expanded-details">
          <span style={{ color: "blue", fontWeight: "530" }}>
            Proffesor :{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.Name}
            </span>
          </span>
          {/* <span style={{ color: "blue", fontWeight: "530" }}>
            Email:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.email}
            </span>
          </span> */}
          <span style={{ color: "blue", fontWeight: "530" }}>
            Open for:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.batches}
            </span>
          </span>
          <span style={{ color: "blue", fontWeight: "530" }}>
            Resume Required:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.isResume}
            </span>
          </span>
      
          <span style={{ color: "blue", fontWeight: "500" }}>
            Students Registered:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.students}/{props.total}
            </span>
          </span>
          {/* <span style={{ color: "blue", fontWeight: "500" }}>
            Additional Details:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.additional}
            </span>
          </span> */}
        </div>
        {/* <div className="editing">
          <button>Edit</button>
          <button>Delete</button>
         </div> */}
      </div>
      
      <div className="request-button-css"><Link to="/ProjectDesc"><button>Request</button></Link></div>
    
    </div>
  );
}

function ProjectCategory(props) {
  // console.log(props.CategoryName);

  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mohdnasar.vercel.app/api/user/faculty/projects/?projectCategory=${props.CategoryName}`
        );
        // console.log(response.data);
        setFacultyData(response.data); // Assuming the response contains an array of faculty data
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://mohdnasar.vercel.app/api/user/faculty"
  //       );
  //       // console.log(response.data);
  //       setFacultyData(response.data); // Assuming the response contains an array of faculty data
  //     } catch (error) {
  //       console.error("Error fetching faculty data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <div className="outer-background">
      <div className="prof-projects-list">
        <div className="porjects-heading-note">
          <h2>Ongoing projects:-</h2>
        </div>
     
          {
            facultyData.map((item, index) => {
              return (
                <TotalProjects
                  key={index}
                  index ={item._id}
                  // index={item.name + index} // Note: You might want to use a unique identifier here
                  name={item.name}
                  Name={item.name}
                  email={item.email}
                  details={item.description}
                  cpi={item.cpirequired}
                  category ={item.projectCategory}
                  batches={item.openfor}
                  additional={item.Openfor}
                  preReq={item.openfor}
                  resume={item.resumerequired}
                  students={item.studentRegistered}
                  total={item.maxstudents}
                  isResume={item.resumerequired}
                  isRequest={item.isRequest}
                />
              );
            })
          }

        {/* {facultyData.map((item) => {
  // console.log(item.name);

  return item.projects.map((iterator, index) => {
    // console.log(item.name + index); // Corrected: Wrap in curly braces
    return (
      <TotalProjects
        key={index}
        index ={iterator._id}
        // index={item.name + index} // Note: You might want to use a unique identifier here
        name={iterator.name}
        Name={iterator.name}
        email={iterator.email}
        details={iterator.description}
        cpi={iterator.cpirequired}
        category ={iterator.projectCategory}
        batches={iterator.openfor}
        additional={iterator.Openfor}
        preReq={iterator.openfor}
        resume={iterator.resumerequired}
        students={iterator.studentRegistered}
        total={iterator.maxstudents}
        isResume={iterator.resumerequired}
        isRequest={iterator.isRequest}
      />
    );
  });
})} */}


      </div>
    </div>
  );
}

export default ProjectCategory;