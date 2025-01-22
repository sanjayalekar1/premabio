import { useState } from "react";
import "./Experience.css";

const content = [
  [
    "Skilled in Drupal, PHP, HTML, CSS, MySQL, and jQuery for web development.",
    "Expertise in custom modules, theming, Paragraphs, Content types, blocks and styling.",
    "Worked on webforms and email handlers for customized user submission emails.",
    "Successfully upgraded Drupal 8 to 9 and Drupal 9 to 10,including managing errors, created patches, and testing.",
    "Extensive experience in multisite website development.",
    "Proficient in contributed modules, addressing issues, and making changes, along with expertise in custom theming.",
    "Proficient in site studio components.",
    "Worked on New Relic and GA and postman tools."
    
  ],
  [
    "Developed user interaction websites using PHP, Restful API, HTML, CSS.",
    "Assisted in trouble shooting and resolving website issues.",
    "Ensured cross-device compatibility and responsive design principles."
  ],
  [
    "Worked or built Admin panel using PHP CodeIgniter framework, HTML, CSS.",
    "Worked on ecommerce and schools projects.",
    "Experience in working with third-party APIs tester Postman and good knowledge in creating APIs for- Android Apps."
  ],
  [
    "Learning React, Hooks, Redux, React Router, Next.js.",
    "Practicing and creating small projects in ReactJs."
  ]
];

function Experience() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <h2 className="heading">Experience</h2>
      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Capgemini, India, Bangalore            
            <p class="experience-year">Jan-2021 to April-2024</p>
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Raclac Technologies
            <p class="experience-year">Sep-2020 to Jan-2021</p>
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            A&S technologies, Bangalore
            <p class="experience-year">Sep-2019 to Sep-2020</p>
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Study and Practice Reactjs           
            <p class="experience-year">June-2024 - Present</p>
          </button>
        </menu>
        <div id="experience-section-tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;