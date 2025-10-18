import { Container, Row, Col } from "react-bootstrap";
import blog from '../assets/img/springsecurity.png';

export const Blog = () => {
    return (
        <section className="py-3 mb-5 blogs" id="blogs">
            {/* <h2>Blogs</h2> */}
            <Container className="pt-4">
                <Row>
                    <Col sm={12} md={6} lg={4} className="mb-2">
                        <div className="card p-3">
                            <img src={blog} className="card-image" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Building Secure Spring Boot Applications with JWT Authentication</h5>
                                {/* <p className="card-text">In this blog, we’ll walk through a straightforward way to add a contact form to your portfolio website using React for the front end and AWS Lambda for the back end.</p> */}
                                <a href="https://medium.com/@sandhya.khinmyowai_40698/building-secure-spring-boot-applications-with-jwt-authentication-ec833ef8d24d"
                                    target="_blank">Read More...</a>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="mb-2">
                        
                    </Col>
                </Row>


            </Container>
        </section>
    )
}