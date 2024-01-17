import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse ,  faEdit,faCode,} from "@fortawesome/free-solid-svg-icons";
import './BannerItem.css'

function BannerItem() {
    const card = [
        {
            icon: faHouse,
          heading: "Full Stack",
          paragraph: "24 Hours Support",
        },
        {
          icon: faEdit,
          heading: "Front End",
          paragraph: "24 Hours Support",
        },
        {
          icon: faCode,
          heading: "React js",
          paragraph: "With Nwxt js",
        },
        
        {
          icon: faHouse,
          heading: "Mern Stack",
          paragraph: "24 Hours Support",
        },
        {
            icon:faHouse,
            heading: "Python",
            paragraph: "With MI ML",
          }
      ];
      
  const Column=({Card})=>{
    return(
        <Col className="text-center p-3 shadow border me-3 border rounded" >
          <div className="icon-box p-2 mx-5 rounded-circle border">
          <FontAwesomeIcon icon={Card.icon} />
             </div>
           <h4>{Card.heading}</h4>
               <p>{Card.paragraph}</p>
        
           </Col> 
    )
  }
  return (
    <>
      <Container >
        <Row >
            {/* using map function */}
          {card.map((item, index) => {
            return (
              //      <Col className="text-center p-5 shadow border me-2">
              //      <div className="Icon-box">
              //        <FontAwesomeIcon icon={faHome} />
              //        <h1>Python course</h1>
              //        <p>24 hours support</p>
              //      </div>
              //    </Col>
              <Column Card={item} key={index}/>
            );
          })}
          {/* using bootstrap */}
          {/* <Col className="text-center p-5 shadow border me-2">
            <div className="Icon-box">
              <FontAwesomeIcon icon={faHome} />
              <h1>Python course</h1>
              <p>24 hours support</p>
            </div>
          </Col>
          <Col className="text-center p-5 shadow border me-2">
            <div className="Icon-box">
              <FontAwesomeIcon icon={faHome} />
              <h1>Frontend Course</h1>
              <p>24 hours support</p>
            </div>
          </Col>
          <Col className="text-center p-5 shadow border me-2">
            <div className="Icon-box">
              <FontAwesomeIcon icon={faHome} />
              <h1>Full course</h1>
              <p>24 hours support</p>
            </div>
          </Col>
          <Col className="text-center p-5 shadow border me-2">
            <div className="Icon-box">
              <FontAwesomeIcon icon={faHome} />
              <h1>React js course</h1>
              <p>24 hours support</p>
            </div>
          </Col>
          <Col className="text-center p-5 shadow border me-2">
            <div className="Icon-box">
              <FontAwesomeIcon icon={faHome} />
              <h1>java course</h1>
              <p>24 hours support</p>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default BannerItem;
