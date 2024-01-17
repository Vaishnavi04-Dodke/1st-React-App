import React from "react";
import image from "../../Images/Email-Marketing-Software-Tools-Reviews-qey6kgzcp4jceza06eflpiopdi3nj7mspn62fyp868.png";
// import Companydetails from "../CompanyDetails/CompanyDetails.json";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
// import { faC } from "@fortawesome/free-solid-svg-icons";

function Column({ data }, index) {
  return (
    <Col key={index} className="col-md-6 p-0 m-0 text-md-start text-lg-start">
      {data.Image && (
        <img src={data.Image} alt="Footer Logo" className="img-fluid" />
      )}

      <h1 className="fw-bolder text-color-green">{data.Heading}</h1>
      <p className="fs-6  text-white">{data.Address}</p>
      <h4 className="text-color-green text-uppercase mb-0">
        {data.SubHeading}
      </h4>
      <p className="text-white">{data.Mobile}</p>
      <h4 className="text-color-green text-uppercase mb-0 mt-2">
        {data.SubHeading2}
      </h4>
      <p className="text-white">{data.Email}</p>
      <h4 className="text-color-green text-uppercase mb-0 mt-2">
        {data.SubHeading3}
      </h4>
    </Col>
  );
}

function Footer() {
  const footer = [
    {
      Image: image,
    },
    {
      Heading: "Contact Us",
      SubHeading: "Phone",
      SubHeading2: "Email",
      SubHeading3: "Social",
      Address: "123 Main Street",
      Mobile: "123-456-7890",
      Email: "info@example.com",
    },
  ];

  return (
    <section className="contact-us">
      <Container
        fluid
        className="container-md container-lg p-3 ps-md-5 ps-lg-5 pe-md-5 pe-lg-5 "
      >
        <Row className="row align-items-center justify-content-between p-0 m-0 pt-2">
          {footer.map((item, index) => (
            <Column data={item} key={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
export default Footer;
