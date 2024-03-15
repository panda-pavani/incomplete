import React from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import UserDetails from './userdetails';

function ProfileCard({ user }) {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate('/ProjectDesc');
    };

    return (
        <div className="container9">
            <div className="row">
                <div className="col-md-3">
                    <img src={user.image} alt="student pic" className="profile-img" />
                </div>
                <div className="col-md-9">
                    <div className="profile-info">
                        <div className="profile-info-item">
                            <h3>Name: {user.name}</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Roll No: {user.rollno}</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Email Id: {user.email}</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Department: {user.branch}</h3>
                        </div>

                        <div className="table-container">
                            <h2>Projects History</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Serial Number</th>
                                        <th>Project Name</th>
                                        <th>Accepted/Rejected</th>
                                        <th>Professor Name</th>
                                        {/* <th>Details</th> */}
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProfileCard1({ project }) {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate('/ProjectDesc');
    };

    return (
        <div className="container8">
            <div className="row8">
                <div className="col-md-98">
                    <div className="profile-info">
                        <div className="table-container">
                            <h2></h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{project.id}</td>
                                        <td>{project.name}</td>
                                        <td>{project.status}</td>
                                        <td>{project.prof}</td>
                                        {/* <td><button onClick={() => handleDetailsClick()}>Details</button></td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserProfile() {
    return (
        <div className='flexcard'>
            {UserDetails.UserDetails.map((item) => (
                <ProfileCard
                    key={item.id}
                    user={{
                        name: item.name,
                        email: item.email,
                        branch: item.branch,
                        rollno: item.rollno,
                        image: item.image
                    }}
                />
            ))}
            {UserDetails.Projects.map((item) => (
                <ProfileCard1
                    key={item.id}
                    project={{
                        id: item.id,
                        name: item.name,
                        status: item.status,
                        prof: item.prof
                    }}
                />
            ))}
        </div>
    );
}

export default UserProfile;
