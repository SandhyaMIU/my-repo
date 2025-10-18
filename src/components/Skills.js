import { Container } from "react-bootstrap"

import React from 'react';
import '../data/Skills.css';
import htmlLogo from '../assets/img/html-logo.svg';
import cssLogo from '../assets/img/CSS.png';
import javaLogo from '../assets/img/java-logo.svg';
import javascriptLogo from '../assets/img/JS.png';
import reactLogo from '../assets/img/react-logo.svg';
import springLogo from '../assets/img/springio-logo.svg';
import restapi from '../assets/img/Rest.png';
import pythonLogo from '../assets/img/Python.png';
import agileLogo from '../assets/img/Agile.png';
import mysqlLogo from '../assets/img/MySQL.png';
import postgreSQL from '../assets/img/PostgreSQL.png';
import MongoDB from '../assets/img/MongoDB.png';
import JunitLogo from '../assets/img/Junit.png';
import Docker from '../assets/img/Docker.png';
import Git from '../assets/img/git-logo.png';
import JIRA from '../assets/img/JIRA.png';
import AWSLogo from '../assets/img/AWS.png';



const skillsData = [
    { name: 'Java', logo: javaLogo  },
    { name: 'Spring Boot', logo: springLogo  },
    { name: 'Rest API', logo: restapi  },
    { name: 'Python', logo: pythonLogo  },
    { name: 'Agile', logo: agileLogo },
    { name: 'HTML', logo: htmlLogo  },
    { name: 'CSS', logo: cssLogo  },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'React.js', logo: reactLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'PostgreSQL', logo: postgreSQL },
    { name: 'MongoDB', logo: MongoDB },
    { name: 'JUnit', logo: JunitLogo },
    { name: 'Git', logo: Git },
    { name: 'Docker', logo: Docker },
    { name: 'JIRA', logo: JIRA },
    { name: 'Amazon Web Services', logo: AWSLogo },

];

const Skills = () => {
    return (
        <div className="skills-section" id="skills">
            <h2>My Areas of Expertise 🌟 </h2>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
