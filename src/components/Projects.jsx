import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "./Projects.css";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Projects = () => {
  const projects = [
    {
      title: "London Hydro Website",
      description: "Portal to access the open data collections",
      image: "../src/assets/image1-lh-2024.png",
    },
    {
      title: "Oaville Hydro Website",
      description: "Packer and Movers Website",
      image: "../src/assets/image2-oh-2024.png",
    },
    {
      title: "NT Power Website",
      description: "Portal to access the open data collections",
      image: "../src/assets/image3-ntp-2024.png",
    },
    {
        title: "Niagara Peninsula Energy",
        description: "Portal to access the open data collections",
        image: "../src/assets/image4-npei-2024.png",
      },
  ];

  return (
    <div id="projects" className="projects-section">
      <h2 className="heading">Projects</h2>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true} // Enables continuous loop
        autoplay={{
          delay: 3000, // Slide transition interval
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Adjust slides per view based on screen size
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="projects-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project-slide">
            <div className="card project-card">
                <div className="card-img-container">
                    <img className="card-img-top project-img" src={project.image} alt={project.title} />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
