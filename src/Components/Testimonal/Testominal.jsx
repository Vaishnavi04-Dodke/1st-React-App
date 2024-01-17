
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../../Images/first.png";
import Image1 from "../../Images/second.png";
import Image3 from "../../Images/third.png";

function Card({ text }) {
  return (
    <Col xs={12} md={4} lg={4} className="cards col-md-4 p-4 text-center" style={{ backgroundColor: "#f4f4f4", borderRadius: "20px", margin: "10px" }}>
      <img src={text.image} alt={`Testimonial by ${text.owner}`} className="rounded-circle mb-4" />
      <p className="p">{text.content}</p>
      <small className="text-color-green fw-bold">{text.owner}</small>
    </Col>
  );
}

function Client({ items }) {
  return (
    <Col xs={12} className="mt-lg-0 mt-4">
      <h1 className="text-color-green">{items.heading}</h1>
      <p className="fs-6 mb-5">{items.content}</p>
    </Col>
  );
}

function Testimonial() {
  const client = [
    {
      heading: "Client Testimonials",
      content: "We connect your Business to your customers",
    },
  ];

  const column = [
    {
      image: Image,
      content:
        "Connectana not only delivered a stunning website for my business, but they did it in record time! I couldn't believe how quickly I had a professional online presence. Highly recommend their services!",
      owner: "- Catherine Farai, Sambasi ",
    },
    {
      image: Image1,
      content:
        "I was amazed by how easy it was to get my website up and running with Connectana. In just under an hour, I had a beautiful storefront that showcased my products perfectly. It's been a game-changer for my online sales!",
      owner: "- Tawanda Mande, Golstra ",
    },
    {
      image: Image3,
      content:
        "Connectana's fast and efficient website solutions helped me establish a strong digital presence for my consultancy services. Within minutes, I had a sleek and professional website that attracted clients from all over the world. I couldn't be happier!",
      owner: "- Neil Tran, Gaviez Express ",
    },
  ];

  return (
    <Container className="container-md container-lg p-3 ps-md-5 ps-lg-5 pe-md-5 pe-lg-5 pb-md-5 pb-lg-5">
      <Row className="text-center">
        {client.map((item, index) => (
          <Client items={item} key={index} />
        ))}
      </Row>
      <Row className="d-flex justify-content-center align-items-center p-0 m-0 small-cards mt-5 mb-5 mb-lg-0 mb-md-0 ">
        {column.map((item, index) => (
          <Card text={item} key={index} />
        ))}
      </Row>
    </Container>
  );
}

export default Testimonial;

