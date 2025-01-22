import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: './src/assets/html5-svgrepo-com.svg' },
  { name: 'CSS3', icon: './src/assets/css3-02-svgrepo-com.svg' },
  { name: 'JavaScript', icon: './src/assets//javascript-svgrepo-com.svg' },
  { name: 'Drupal', icon: './src/assets/drupal-svgrepo-com-new.svg' },
  { name: 'PHP', icon: './src/assets/php-svgrepo-com.svg' },
  { name: 'React', icon: './src/assets/react-svgrepo-com.svg' },
  { name: 'jQuery', icon: './src/assets/jquery-svgrepo-com.svg' },
  { name: 'Git', icon: './src/assets/git-svgrepo-com.svg' },
  { name: 'VS Code', icon: './src/assets/vs-code-svgrepo-com.svg' },
  { name: 'MySQL', icon: './src/assets/mysql-logo-svgrepo-com.svg' },
  { name: 'Jira', icon: './src/assets/jira-svgrepo-com.svg' },
  { name: 'Acquia', icon: './src/assets/drupal-svgrepo-com-new.svg' },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="heading">Skills</h2>
      <div className="skills-container">
        
        {skills.map(skill => (
          <div className="skill" key={skill.name}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Skills;