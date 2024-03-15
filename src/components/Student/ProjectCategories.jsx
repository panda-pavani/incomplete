import React, { useState } from "react";
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
      projectDiv.style.height = "160px";
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
          <span style={{ color: "blue", fontWeight: "530" }}>
            Email:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.email}
            </span>
          </span>
          <span style={{ color: "blue", fontWeight: "530" }}>
            Open for:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.batches}
            </span>
          </span>
          {props.resume ? (
            <span style={{ color: "blue", fontWeight: "500" }}>
              Resume required:{" "}
              <span
                style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
              >
                {props.isResume}
              </span>
            </span>
          ) : (
            ""
          )}
          <span style={{ color: "blue", fontWeight: "500" }}>
            Students Registered:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.students}/{props.total}
            </span>
          </span>
          <span style={{ color: "blue", fontWeight: "500" }}>
            Additional Details:{" "}
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "15px" }}
            >
              {props.additional}
            </span>
          </span>
        </div>
        {/* <div className="editing">
          <button>Edit</button>
          <button>Delete</button>
         </div> */}
      </div>
      {props.isRequest ? (
      <div><Link to="/ProjectDesc"><button>Request</button></Link></div>
      ) : ("")}
    </div>
  );
}

function ProjectCategory() {
  return (
    <div className="outer-background">
      {/* <h1 className='random'>this is home page</h1> */}
      <div className="prof-projects-list">
        <div className="porjects-heading-note">
          <h2>Ongoing projects:-</h2>
          {/* <Link className="a" to="/About"><button>Add New Project</button></Link>  */}
        </div>

        {ProjectDetails.map((item, index) => {
          //if (item.studentRegistered < item.maxStudents)
            return (
              <TotalProjects
                key={index} //
                index={index} //
                name={item.title} //
                Name={item.name} //
                email={item.email} //
                details={item.description} //
                cpi={item.cpi} //
                batches={item.Openfor} //
                additional={item.Openfor}
                preReq={item.Openfor} //
                resume={item.resume} //
                students={item.studentRegistered}
                total={item.maxStudents}
                isResume={item.isResume}
                isRequest={item.isRequest}
              />
            );
        })}
      </div>
    </div>
  );
}

export default ProjectCategory;