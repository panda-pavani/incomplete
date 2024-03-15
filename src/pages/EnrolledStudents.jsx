import React from 'react';
import './Requests.css';

const Contacts = [
  {
      project: 'Web Dev',
      name: "Pavani Priya",
      department: '8919047022',
      rollNo:"220xxx",
      email: "pavanipriya6124@gmail.com"
  },
  {
    project: 'Web Dev',
    name: "Pavani Priya",
    department: '8919047022',
    rollNo:"220xxx",
    email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},
]

const FacultyCard = ({ project, name, rollNo, department, email }) => {
  return (
    <div className="facultycard">
      <h2>Project: {project}</h2>
      <h3>Name: {name}</h3>
      <p>Department: {department}</p>
      <p>Roll Number: {rollNo}</p>
      <p>Email: {email}</p>
      <button className="reject-button">REJECT</button>
    </div>
  );
};

const EnrolledStudents = () => {
  return (
    <div>
        <div className='MC'>
          { Contacts.map((item) => {
            return (
              <FacultyCard 
              project = {item.project}
              name = {item.name}
              rollNo ={item.rollNo}
              department ={item.department}
              email ={item.email}
              />
              );
           })}
           <FacultyCard />
        </div>
        </div>
  );
};

export default EnrolledStudents;