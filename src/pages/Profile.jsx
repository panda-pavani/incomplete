import React from 'react';
import img from '../components/Faculty/users.png'
import "./ProfProfile.css"

const Profile = () => {
  const user = {
    name: 'Sanapala Jaswanth',
    rollNo: '220955',
    department: 'Computer Science and Engineering',
    email: 'info@example.com',
    projectHistory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores, architecto totam amet iusto fuga exercitationem qui, ipsam consequatur repellat atque. Et iste quis perspiciatis, quisquam mollitia voluptatem ut asperiores!',
  };

  return (
    <div className='Container'>
    <div style={{ backgroundColor: '#f4f5f7', height: '100vh' }}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src={img} alt="Avatar" className="my-5" style={{ width: '80px' }} />
                  <h5>{user.name}</h5>
                  <p>{user.rollNo}</p>
                  <p>{user.department}</p>
                  <p>{user.email}</p>
                  <i className="fas fa-edit mb-5" />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <p className="mb-0">Research Work:</p>
                        <p className="text-muted">{user.projectHistory}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;