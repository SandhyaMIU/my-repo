import { useState, useEffect } from "react";
import '../data/Banner.css';
import { Container, Row, Col } from "react-bootstrap";
import { About } from "./Aboutme";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const postitions = ['IT Specialists', 'IT Support'];
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % postitions.length;
        const fullText = postitions[i];
        const updatedText = isDeleting ?
            fullText.substring(0, text.length - 1) :
            fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(delta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }

    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col>
                        <div>
                            <h1>
                                I'm Nay Winn,
                                {/* <div className="pt-4">
                                    a {text}
                                </div> */}
                                <div className="d-none d-md-block pt-3">
                                    {text}
                                </div>
                                <div className="d-sm-block d-md-none pt-3" style={{ fontSize: '30px' }}>
                                    {text}
                                </div>
                            </h1>
                        </div>
                    </Col>
                </Row>

            </Container>

        </section>
    )

}