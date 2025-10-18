// src/components/Education.js

import React from 'react';
import { Container } from "react-bootstrap"
import '../data/Education.css';
import aws from '../assets/img/AWS-Certified-Cloud-Practitioner.png';
import { BsBoxArrowUpRight } from "react-icons/bs";


const Education = () => {
  const educationData = [
    {
      
      degree: "Master of Science in Information Technology",
      institution: 'University of Massachusetts, Lowell Online Program',
      year: 'Sep 2023 - Present',
      location: 'USA',
      keyCourses: [
        'Network Engineering',
        'Cyber Security',
        'Cloud Computing'
      ]
    },
    {
      
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Computer Studies',
      year: 'Jan 2012 - Feb 2016',
      location: 'Mandalay, Myanmar',
      keyCourses: [
        'Probability and Probability Distributions',
        'Research Methodology',
        'Multivariate Analysis'
      ]
    }
  ];


  return (
    <div className="edu" id="education">
      <h2>Education</h2>

      <Container className="pt-3">
      <div className="timeline">
        {educationData.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-left">
              <h6>{exp.degree}</h6>
              <span className="duration">{exp.year}</span>
            </div>
            <div className="timeline-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="timeline-right">
              <h5>{exp.institution}</h5>
              {/* <p>{exp.keyCourses}</p> */}
              <p>{exp.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="d-flex align-items-center justify-content-start justify-content-md-center">
                    <div className="d-flex">
                        <img src={aws} style={{ width: '38px', height: '38px' }} />
                        <div className="ms-2">
                            <p>AWS Certified - Cloud Practitioner</p>
                            <a className="btn btn-light d-flex justify-content-center align-items-center" href="https://www.credly.com/badges/60f1ec07-e406-449b-b35d-d86eaa36196d" target="_blank">
                                View Credentials
                                <BsBoxArrowUpRight className="ms-2" />
                            </a>
                        </div>
                    </div>
                </div> */}
                </Container>
                <hr />




    </div>

  );


};



export default Education;
