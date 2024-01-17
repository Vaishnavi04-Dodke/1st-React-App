import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "./../../Images/3.png";
import "./Bussines.css";
import Image from  "../../Images/increase.png";

function Bussines() {
//   const columns = [
//     {
//       Heading: "We'll help perfect your business grow !",
//       Content: [
//         <p key={1}>
       
//           "Experience the lightning-fast transformation of your business with
//           Connectana's revolutionary website solutions - go global and conquer
//           the digital world in just 60 minutes!"
//         </p>,
//       ],
//     },
//     {
//       Heading: "",
//       Content: [
//         <img key={1} src={image} alt="About Us" className="img-fluid" />,
//       ],
//     },
//   ];

  return (
    <>
    <section className="about-us-continue" >
      <Container fluid className="container-md container-lg p-3 ps-md-5 ps-lg-5 pe-md-5 pe-lg-5">
      <Row className="row align-items-center p-0 m-0 pt-2">
          {/* {columns.map((column, index) => (
            <Col key={index} className="Bussiness-content p-5 m-5">
              <h1>{column.Heading}</h1>
              {column.Content}
            </Col>
          ))} */}
          <Col className="col-md-6 about-contain p-4 mt-5 mt-md-0 mt-lg-0">
          {/* <div className="content p-4 " > */}
            <img src={Image} alt="Business Growth" width={"10%"} className="m-3 border rounded p-2"></img>
            <h2 className="fw-bolder" >"We'll help perfect</h2>  
            <h2 className="fw-bolder">your business grow !"</h2>
            <p className="fs-6 text-justify">"Experience the lightning-fast transformation of your business with
          Connectana's revolutionary website solutions - go global and conquer
          the digital world in just 60 minutes!"</p>
        {/* </div> */}
          </Col>
          <Col className="col-md-6 p-0 m-0 text-md-end text-lg-end">
          <img src={image} alt="Business Growth Illustration" width={"100%"} />

          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
}

export default Bussines;
