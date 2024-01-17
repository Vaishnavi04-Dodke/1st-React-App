import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from './../../Images/2.png';
import './About.css'

function About() {
  const columns = [
    {
      Heading: "About Us",
      Content: [
        <p key={1}>
          <span>CNC WEB WORLD</span> is one of the Leading Hubs in IT Training.
          We make sure that our students learn the training courses in a
          practical manner to get maximum knowledge out of it & get placement
          immediately after course completion. Our training structure is
          designed in such a way so that the main objective of the students is
          accomplished
        </p>,
        <p key={2}>As per the industry trends many students coming out of colleges are
          lacking the skills and practical knowledge which is required in IT industry to work. So to make
          up for this and to make our students more technically sound we have one faculty for one student
          training module which is very unique and one of its kind.
        </p>,
        <p key={3}>
          CNC Web World has strong network of experienced Faculty with sound
          domain knowledge on multiple training courses to guide you throughout your training sessions.We
          provide job oriented cost effective training to individuals, organizations.
        </p>,
      ]
    },
    {
      Heading: "",
      Content: [
        <img key={1} src={image} alt="About Us" className="img-fluid" width={"80%"} />,
      ],
    },
  ];

  return (
    <section className="about-container">
      <Container fluid className="container-md container-lg p-3 p-md-5 p-lg-5">
        <Row>
          {columns.map((column, index) => (
            <Col key={index} className="about-content col-lg-6 col-md-6">
              <h1 className="pb-3 ">{column.Heading}</h1>
              {column.Content.map((paragraph, idx) => (
                
                <p key={idx} className="mb-3">{paragraph}</p>
            
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default About;

