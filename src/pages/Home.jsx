import React from 'react';
import './Home.css'; 
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container18">
      <div className="row8">
        <div className="col-md-88">
          <h1 className="display-48 mb-5">𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓽𝓱𝓮 𝓼𝓽𝓾𝓭𝓮𝓷𝓽 𝓭𝓪𝓼𝓱𝓫𝓸𝓪𝓻𝓭!</h1>
          <div>
          <Link to="/Student"><button className='explore-project'>Explore Projects</button></Link>
          </div>
          <p className="lead8">𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓽𝓱𝓮 𝔀𝓸𝓻𝓵𝓭 𝓸𝓯 𝓹𝓻𝓸𝓳𝓮𝓬𝓽𝓼 𝓪𝓷𝓭 𝓻𝓮𝓼𝓮𝓪𝓻𝓬𝓱 𝓸𝓹𝓹𝓸𝓻𝓽𝓾𝓷𝓲𝓽𝓲𝓮𝓼.𝓦𝓱𝓮𝓽𝓱𝓮𝓻 𝔂𝓸𝓾'𝓻𝓮 𝓪 𝓬𝓾𝓻𝓲𝓸𝓾𝓼 𝓮𝓷𝓽𝓱𝓾𝓼𝓲𝓪𝓼𝓽, 𝓪 𝓯𝓮𝓵𝓵𝓸𝔀 𝓻𝓮𝓼𝓮𝓪𝓻𝓬𝓱𝓮𝓻, 𝓸𝓻 𝓪 𝓹𝓸𝓽𝓮𝓷𝓽𝓲𝓪𝓵 𝓬𝓸𝓵𝓵𝓪𝓫𝓸𝓻𝓪𝓽𝓸𝓻, 𝓭𝓲𝓿𝓮 𝓲𝓷 𝓽𝓸 𝓮𝔁𝓹𝓵𝓸𝓻𝓮 𝓽𝓱𝓮 𝓮𝔁𝓬𝓲𝓽𝓲𝓷𝓰 𝓭𝓲𝓼𝓬𝓸𝓿𝓮𝓻𝓲𝓮𝓼 𝓪𝓷𝓭 𝓲𝓷𝓼𝓲𝓰𝓱𝓽𝓼 𝓯𝓻𝓸𝓶 
𝓪 𝓬𝓾𝓻𝓪𝓽𝓮𝓭 𝓼𝓮𝓵𝓮𝓬𝓽𝓲𝓸𝓷 𝓸𝓯 𝓭𝓲𝓿𝓮𝓻𝓼𝓮 𝓻𝓮𝓼𝓮𝓪𝓻𝓬𝓱 𝓮𝓷𝓭𝓮𝓪𝓿𝓸𝓻𝓼 𝓼𝓹𝓪𝓷𝓷𝓲𝓷𝓰 𝓿𝓪𝓻𝓲𝓸𝓾𝓼 𝓭𝓲𝓼𝓬𝓲𝓹𝓵𝓲𝓷𝓮𝓼, 𝓯𝓻𝓸𝓶 𝓪𝓻𝓽𝓲𝓯𝓲𝓬𝓲𝓪𝓵 𝓲𝓷𝓽𝓮𝓵𝓵𝓲𝓰𝓮𝓷𝓬𝓮 𝓽𝓸 𝓮𝓷𝓿𝓲𝓻𝓸𝓷𝓶𝓮𝓷𝓽𝓪𝓵 𝓼𝓬𝓲𝓮𝓷𝓬𝓮.</p>
          {/* <p className="message">Here you can browse through available projects, request projects, and stay updated with announcements.</p>
          <p className="message1">Start your journey towards excellence by finding projects that match your interests and skills.</p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;