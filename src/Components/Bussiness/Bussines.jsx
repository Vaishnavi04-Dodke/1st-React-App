
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from  "../../Images/increase.png";
import "./Bussines.css";
import image from "./../../Images/3.png";

function Bussines() {
  return (
    <section className="about-us-continue">
      <Container fluid className="container-md container-lg p-3 ps-md-5 ps-lg-5 pe-md-5 pe-lg-5">
        <Row className="align-items-center p-0 m-0 pt-2 flex-md-row flex-lg-row flex-column-reverse">
          <Col xs={12} md={6} className="about-contain p-4 mt-5 mt-md-0 mt-lg-0">
            <img src={Image} alt="Business Growth" className="img-fluid m-3 border rounded p-2" />
            <h2 className="fw-bolder">"We'll help perfect your business grow!"</h2>
            <p className="fs-6 text-justify">Experience the lightning-fast transformation of your business with Connectana's revolutionary website solutions - go global and conquer the digital world in just 60 minutes!</p>
          </Col>
          <Col xs={12} md={6} className="p-0 m-0 text-md-end text-lg-end">
            <img src={image} alt="Business Growth Illustration" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Bussines;







