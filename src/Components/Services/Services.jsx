import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Service.css";
import youtube from './../../Images/youtube.png';
import lamp from './../../Images/lamp.png';
import increase from '../../Images/increase.png';

function RowComponent({ data }) {
  return (
    <Col>
      <h1 className="text-color-green mt-lg-0 mt-md-0">{data.heading}</h1>
      <p className="text-white fs-5">{data.content}</p>
    </Col>
  );
}


function ColumnComponent({ data }, index) {
  return (
    <Col key={index} className="Service-column  mb-5">
      <div className="p-4">
        <img src={data.icon} alt="Icon" style={{ width: "20%" }} className="service-icon p-2 m-2" />

        <h6 className="text-uppercase text-color-green">{data.heading}</h6>
        <p className="text-white fs-9">{data.paragraph}</p>
      </div>
    </Col>
  );
}

function Services() {
  const columns = [
    {
      heading: "Our Services",
      content: `
        We specialize in creating quick and easy websites that provide our
        customers with a strong web presence and effective digital business
        solutions. With us, you can have your very own global storefront and
        digital business card in less than one hour...
      `,
    }
  ];

  const cards = [
    {
      icon: youtube,
      heading: "Domain Registration",
      paragraph: "Have your domain name registered as you wait.",
    },
    {
      icon: increase,
      heading: "WEBSITE & EMAIL",
      paragraph: "Have your email and website designed and set up while you wait.",
    },
    {
      icon: lamp,
      heading: "DIGITAL BUSINESS CARD",
      paragraph: "Never have to print again and be able to share your card unlimitedly.",
    },
  ];

  return (
    <>
      <section className="services-us">
        <Container fluid className="container-md container-lg p-3 ps-md-5 ps-lg-5 pe-md-5 pe-lg-5 pb-md-5 pb-lg-5">
          <Row className="p-3 pt-3">
            {columns.map((data, index) => (
              <RowComponent data={data} key={index} />
            ))}
          </Row>
          <Row className="p-3">
            <>
            {cards.map((item, index) => (
              <ColumnComponent data={item} key={index} />
            
            ))}
              </>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;


