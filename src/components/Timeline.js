import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Timeline = () => {

    return (
        <section className="project" id="career">
            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Career Journey</h2>
                            <p>
                                Every step of my professional journey has shaped who I am today.
                                From early beginnings to recent achievements, my career timeline is a reflection of
                                continuous growth,
                                learning, and passion for development.
                                Each milestone represents a significant chapter,
                                filled with challenges that strengthened my expertise and opportunities that allowed me
                                to contribute meaningfully.
                            </p>
                            <div className="timeline">
                                <div className="timeline-empty">
                                    <div>2019</div>
                                </div>
                                <div className="timeline-middle">
                                    <div className="timeline-circle"></div>
                                </div>
                                <div className="timeline-component timeline-content">
                                    <h3>HTML</h3>
                                    <p>Some Text</p>
                                </div>
                                <div className="timeline-component timeline-content">
                                    <h3>CSS</h3>
                                    <p>Some Text.</p>
                                </div>
                                <div className="timeline-middle">
                                    <div className="timeline-circle"></div>
                                </div>
                                <div className="timeline-empty">
                                </div>

                                <div className="timeline-empty">
                                </div>

                                <div className="timeline-middle">
                                    <div className="timeline-circle"></div>
                                </div>
                                <div className=" timeline-component timeline-content">
                                    <h3>Javascript</h3>
                                    <p>Some Text.</p>
                                </div>

                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
    <img className="background-image-right" src={colorSharp2}></img>
</section>
)
}
