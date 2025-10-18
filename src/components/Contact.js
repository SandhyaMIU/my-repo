import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../data/Contact.css';  
import { ContactInfo } from './ContactInfo';
import { MdMarkEmailRead } from "react-icons/md";
import axios from 'axios';
import { MdError } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [responseMsg, setResponseMsg] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const messageRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setErrors({
            ...errors,
            [name]: ''
        });
    };

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.focus();
        }
    }, [responseMsg]);


    const checkValidation = () => {
        const validationErrors = {};
        if (!formData.name.trim()) {
            validationErrors.name = "Name is requried";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Invalid email format";
        }
        if (!formData.subject.trim()) {
            validationErrors.subject = "Subject is required";
        }
        if (!formData.message.trim()) {
            validationErrors.message = "Message is required";
        }
        return validationErrors;
    }




    const handleSubmit = async (e) => {
        console.log('submit contact data');
        e.preventDefault();

        const validationErrors = checkValidation();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // If there are errors, prevent form submission
        }

        try {
            const response = await axios.post('https://52r03u6z8k.execute-api.us-east-1.amazonaws.com/Staging/send-email',
                formData);

            console.log(response);

            const data = response.data;

            if (response.status >= 200 && response.status < 300) {
                setIsSuccess(true);
                console.log(isSuccess);

                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: ''
                });

            } else {
                setIsSuccess(false);
                console.log('hello')
            }

            setResponseMsg(data.message);
        } catch (error) {
            setIsSuccess(false);
            setResponseMsg('Sorry, We could not send your email. Please try again later.');
            console.error('Error:', error);
        }
    }

    return (

        <section className="contact py-3 mb-5" id="contact">
            <h2>
                Let's Get In Touch! 🍀
            </h2>

            <Container className="pt-3">
                <Row className="d-flex align-items-center">
                    <Col sm={12} md={4} className="text-center order-last order-md-first pt-5">
                        <ContactInfo />
                    </Col>
                    <Col sm={12} md={8}>

                        {responseMsg && (
                            isSuccess ?
                                (
                                    <div className="alert alert-success d-flex align-items-center" role="alert" ref={messageRef} tabIndex={-1}>
                                        <MdMarkEmailRead className="me-2" />
                                        {responseMsg}
                                    </div>
                                ) :
                                (
                                    <div className="alert alert-danger d-flex align-items-center" role="alert" ref={messageRef} tabIndex={-1}>
                                        <MdError className="me-2" />
                                        {responseMsg}
                                    </div>
                                )
                        )
                        }

                        <form onSubmit={handleSubmit} method="post">
                            <Row>
                                <Col size={12} sm={6} className="mb-3">
                                    <div>
                                        <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} />
                                        <small style={{ color: 'red' }}>{errors.name}</small>
                                    </div>

                                </Col>
                                <Col size={12} sm={6} className="mb-3">
                                    <div>
                                        <input type="tel" name="phone" value={formData.phone} placeholder="Phone No.(Optional)" onChange={handleChange} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <div>
                                        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                                        <small style={{ color: 'red' }}>{errors.email}</small>
                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <div>
                                        <input type="text" name="subject" value={formData.subject} placeholder="Subject" onChange={handleChange} />
                                        <small style={{ color: 'red' }}>{errors.subject}</small>
                                    </div>

                                </Col>

                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <div>
                                        <textarea rows="6" name="message" value={formData.message} placeholder="Message" onChange={handleChange}></textarea>
                                        <small style={{ color: 'red' }}>{errors.message}</small>
                                    </div>

                                </Col>
                            </Row>
                            <div className='d-flex justify-content-end'>
                            <button type="submit" className="btn btn-light btn-lg">
                                <span style={{ fontWeight: '700', fontSize: '18px' }}>Send Message</span>
                                <BsSendFill className="ms-2" />
                            </button></div>
                        </form>
                    </Col>
                </Row>

            </Container>
        </section >
    )


}