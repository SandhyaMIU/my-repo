import { Container, Row, Col } from "react-bootstrap";
import '../data/About.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import profile2 from '../assets/img/karan.jpeg';


export const About = () => {
    return (
        <section className="about py-3 mb-5" id="about">
            <Container className="pt-3">
                <Row className="d-flex align-items-center justify-content-center">
                    <Col xs={12} md={9} className="order-last order-md-first">

                    {/* <Tilt>
                        <Lottie 
                        className="illustration" 
                        animationData={CoderGuy} 
                        loop={true} 
                        />
                    </Tilt> */}

                        <div className="about">

                        <p>
                        Highly motivated IT Professional with 4 years of experience in IT support, ERP systems and customer service.
                            <br /><br />

                            Outside of work, I'm passionated to continuous learning, as evidenced by my recent a Master's in Information Technology and holding certificates.
                            I'm eager to leverage my skills and experience to tackle new challenges and deliver innovative solutions in the ever-evolving landscape of technology.

                            <br /><br />
                            If you're seeking for a motivated IT specialist dedicated to ongoing learning and driving results, I'm excited to connect with you.
                        </p>
                        </div>
                        
                    </Col>
                    <Col xs={12} md={3} className="order-first order-md-last mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                src={profile2} // Replace with your photo URL
                                alt="Photo"
                                style={{ borderRadius: '50%', width: '260px', height: '260px', objectFit: 'contain', border: '1px solid #fff' }}
                            />
                        </div>

                    </Col>
                </Row>

            </Container>

        </section>
    )
}