import React from 'react';
import hero from '../images/hero.jpeg';
import { proJects } from '../projects/Projects';

const Hero = () => {
  const newData = proJects[0];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white"
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'black',
          position: 'relative',
        }}
      >
        <img
          src={hero}
          alt="Hero"
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            filter: 'brightness(0.5)',
          }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <h1
            style={{ color: '#00CFFF' }}
            className="card-title display-4 fw-bold fs-4"
          >
            Hi, I'm Harsh Sharma
          </h1>
          <p
            style={{ color: '#00CFFF' }}
            className="card-text lead fw-bold fs-4"
          >
            Full Stack Developer | MERN Stack | Creative Coder
          </p>
          <p style={{ color: '#00CFFF' }} className="card-text">
            Let’s build something amazing together.
          </p>
        </div>
      </div>

      {/* Project Section */}
      {newData && (
        <div
          className="card mb-3"
          style={{
            backgroundColor: '#212121',
            color: 'white',
            border: '2px dotted #00CFFF',
            padding: '0.5rem',
          }}
        >
          <div className="row g-0">
            {/* Carousel Section */}
            <div className="col-md-6 col-sm-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {newData.allImage.map((item, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                      <img
                        src={item}
                        className="d-block w-100"
                        alt={`Slide ${index}`}
                         style={{
    height: '350px',            
    objectFit: 'contain',        
    width: '100%',            
    borderRadius: '10px',
  }}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Text Section */}
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#00CFFF' }}>
                  One of my recent works
                </h5>
                <p className="card-text">
                  <strong>{newData.title}</strong>
                  <br />
                  {newData.dec?.slice(0, 120)}...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
