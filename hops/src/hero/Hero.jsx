import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Overlapping Navbar */}
     

      {/* Hero Section */}
      <div className=" text-white" style={{ height: '100vh', backgroundColor: 'black', position: 'relative' }}>
        <img
          src="./hero.jpeg"
          className=""
          alt="Hero"
          style={{ objectFit: 'cover', height: '100%', width: '100%' , filter:'brightness(0.5)'}}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <h1  style={{color:'#00CFFF'}} className="card-title display-4  fw-bold fs-4">Hi, I'm Harsh Sharma</h1>
          <p   style={{color:'#00CFFF'}} className="card-text lead  fw-bold fs-4">
            Full Stack Developer | MERN Stack | Creative Coder
          </p>
          <p   style={{color:'#00CFFF'}} className="card-text">Let’s build something amazing together.</p>
        </div>
      </div>
      <div  className="card mb-3" style={{  backgroundColor:'#212121', color:'white', margin :"2rem", border:"2px solid #00CFFF" , borderStyle:'dotted', padding:"0.5rem"}}>
  <div className="row g-0">
    <div className="col-md-6 col-sm-6">
      <img src="./hops-media.png" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-6 col-sm-6">
      <div className="card-body">
        <h5 className="card-title" style={{color:'#00CFFF'}}>one  of my recent work</h5>
        <p className="card-text">
         Social Media Web App<br/>
         Autentication, real-time chat, etc.
        </p><br/>
        <a href='https://hops-media-bhyj.onrender.com'  className="btn "style={{backgroundColor:'#00CFFF'}} >View Projects</a>
       
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
