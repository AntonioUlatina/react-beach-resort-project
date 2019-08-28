import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";
import Container from "react-bootstrap/Container";
import Accord from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { memo } from "react";

// class Accordion extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         slug: this.contextType.slug
    //     };
    // }
const Accordion = memo(({ accordion }) => {
    const { slug } = accordion;

    // render() {
        return (

                <Container style={{ margin: 0, background: "lightblue" }}>
                {/* <div style={{ background: "lightblue"}}> */}
                        {/* <Row>
                            <Col sm={3} style={{ background: "lightblue"}}> */}
                                <Image
                                    src={require("../images/logomep.png")}
                                    fluid
                                    style={{ marginTop: 20 }}
                                />
                               
                                <Accord
                                    style={{
                                        marginBottom: "12%",
                                        height: "100%",
                                        marginTop: "20%"
                                    }}
                                >
          
                                    <Card>
                                        <Accord.Toggle
                                            className="Grade"
                                            as={Card.Header}
                                            style={{ background: "black", color: "white" }}
                                            eventKey="0"
                                        >
                            <Link to="/tempTopics" style={{color:"white"}}>

                                            Quarto
                                            </Link>
                    </Accord.Toggle>
                                        <Accord.Collapse eventKey="0">
                                            <Accord>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="0"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>
                                                        Historia
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="0">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>
                                                                Definición y su importancia en la vida cotidiana
                                                                de los Estudios Sociales.
                                                            </Link>
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="1"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>

                                                        Geografia
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="1">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>
                                                                Ubicación hemisférica y continental del país.
                                                            </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="2"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>

                                                        Sociologia
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="2">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>
                                                                Regiones socioeconómicas de Costa Rica:
                                                                ubicación y características.

                                                            </Link>
                            
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="3"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>
                                                        Formacion ciudadana

                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="3">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>

                                                                Definición y su importancia en la vida cotidiana
                                                                de la Educación Cívica.
                                                            </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                            </Accord>
                                        </Accord.Collapse>
                                    </Card>
                                    <Card>
                                        <Accord.Toggle
                                            className="Grade"
                                            as={Card.Header}
                                            style={{ background: "black", color: "white" }}
                                            eventKey="1"
                                        >
                                            <Link to="/" style={{ color: "white" }}>

                                            Quinto
                                            </Link>
                    </Accord.Toggle>
                                        <Accord.Collapse eventKey="1">
                                            <Accord>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="0"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>

                                                        Historia
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="0">
                                                        <Card.Body>
                                                            
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>

                                                                Etnias de Costa Rica: nombres y ubicación
                                                                geográfica.
                                                                </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                    <Accord.Collapse className="Subtopic" eventKey="0">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>

                                                                Arte de los pueblos originarios de Costa Rica.
                                                            </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="1"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>

                                                        Sociologia
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="1">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>

                                                                Impactos culturales, demográficos y sociales de
                                                                la conquista española.
                                                            </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="2"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>

                                                        Formacion ciudadana
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="2">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>
                                                            
                                                                Primera Constitución Política de Costa Rica: El
                                                                Pacto de Concordia.
                                                        </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                            </Accord>
                                        </Accord.Collapse>
                                    </Card>
                                    <Card>
                                        <Accord.Toggle
                                            className="Grade"
                                            as={Card.Header}
                                            style={{ background: "black", color: "white" }}
                                            eventKey="2"
                                        >
                                            <Link to="/" style={{ color: "white" }}>

                                            Sexto
                                            </Link>
                    </Accord.Toggle>
                                        <Accord.Collapse eventKey="2">
                                            <Accord>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="0"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>

                                                        Historia
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="0">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>

                                                                La Campaña Nacional en la época de la
                                                                independencia.
                                                            </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="1"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>

                                                        Sociologia
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="1">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>
                                                            
                                                                Medidas básicas para el manejo de las redes
                                                                sociales
                                                        </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accord.Toggle
                                                        className="Topic"
                                                        as={Card.Header}
                                                        eventKey="2"
                                                    >
                                                        <Link to="/" style={{color: "black"}}>

                                                        Formacion ciudadana
                                                        </Link>
                          </Accord.Toggle>
                                                    <Accord.Collapse className="Subtopic" eventKey="2">
                                                        <Card.Body>
                                            <Link to={`/tempTopics/${slug}`} style={{ color: "black" }}>

                                                                Seguridad Vial: Peatones y pasajeros: conductas
                                                                responsables.
                                                            </Link>
                              
                                                        </Card.Body>
                                                    </Accord.Collapse>
                                                </Card>
                                            </Accord>
                                        </Accord.Collapse>
                                    </Card>
                                </Accord>
                            {/* </Col>
                        </Row> */}
                    {/* </div> */}
                </Container>
        );
    });
// }

Accordion.propTypes = {
    accordion: PropTypes.shape({
        slug: PropTypes.string.isRequired
    })
};

export default Accordion;
