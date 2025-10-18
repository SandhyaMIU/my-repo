// src/components/Experience.js

import React from 'react';
import '../data/Experience.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CSSTransition } from 'react-transition-group';

const Experience = () => {
    const experiences = [
      {
        position: 'Store Manager',
        company: 'Shree Bhavani Inc',
        duration: 'Nov 2019 – July 2022',
        description: 'Supervised daily operations of the gas station and convenience store. Recruited, trained and managed staff.'
      },
      {
        position: 'Account Managnement Executive',
        company: 'Myanmar Information Technology',
        duration: 'Aug 2018 – Sep 2019',
        description: 'Provided customer service, Identified opportunities for account expansion, Collaborated with technical teams.'
      },
      {
        position: 'Associate SAP Consultant',
        company: 'Nexus',
        duration: 'Nov 2017 – July 2018',
        description: 'Executived SAP implementation and configuaration, collaborated with cross-functional teams, designed and delivered comprehensive training materials for end users.'
      },
      {
        position: 'Quality Engineer & Safety Supervisor',
        company: 'GTL',
        duration: 'Feb 2016 – Nov 2017',
        description: 'Conducted regular site inspections and developed quality and safety reports, monitored and enforced the QC process, supervised rectification work at sites.'
      }
      
      ];
    
      return (
        <div className="work-experience" id="experience">
          <h2>Work Experience</h2>

          <Container className="pt-3">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-left">
                  <h3>{exp.position}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <div className="timeline-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="timeline-right">
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

      
  

  
      {/* <div className="d-flex align-items-center justify-content-start justify-content-md-center"> */}
  {/* <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
    <span className="explore-more">Explore more about my professional journey....</span>
  </CSSTransition> */}
  {/* <div className="ml-3"> 
    <a href="/Resume1.pdf" download="Resume_Khin_Myo_Wai.pdf" type="application/pdf"
      className="btn btn-light d-flex justify-content-center align-items-center me-3" target="_blank">
      Download Resume
      <FaCloudDownloadAlt className="ms-2" />
    </a>
  </div> */}
  {/* <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
    <a href="https://www.linkedin.com/in/khinmyowai-sandhya/" target="_blank"
      className="linkedin-icon" style={{ fontSize: '38px', color: '#023a58' }}>
      <FaLinkedin />
    </a>
  </CSSTransition> */}
{/* </div>  */}
    
</Container>

</div>

      );
    }

export default Experience;
