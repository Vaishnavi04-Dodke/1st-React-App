// import React from 'react';
// import './Feature.css'
// import { Row, Container, Col } from 'react-bootstrap';
// import image from './../../Images/benifits.jpg';
// import icon from './../../Images/link-redirect-trace.png.webp';
// function Features() {
//     const benifits = [
//         {
//             icon:icon,
//             content: "100% project based learning ",
//             subcontent: "We build more than 2 real world major projects in each language and don't worry that the project dev..."
//         },
//         {
//             icon:icon,
//             content: "Live call supports",
//             subcontent: "After joining our course you will get a lot of coding problems because our course is 100% project ba"
//         },
//         {
//             icon:icon,
//             content: "High chance of selection",
//             subcontent: " If you will do hard works, And if you will follow our instructions, High chance of selections....."
//         },
//         {
//             icon:icon,
//             content: "Video Access Timing",
//             subcontent: "You can access our videos 24*7 life time, Once you complete your registration...."
//         }
//     ];

//     return (
//         <section className='section'>
//             <Container className='feature-container container-md container-lg p-3 ps-md-5 ps-lg-5 pe-md-5 pe-lg-5 m-5"'>
//                 <Row className='row align-items-center p-0 m-0 pt-2'>
            
//                     <Col md={6} className='col-md-6 about-contain p-4 mt-5 mt-md-0 mt-lg-0'>
//                         <h1 className='p-4'>Benefits of learning</h1>
//                         {benifits.map((benefit, index) => (
//                             <div key={index} className="">
//                                 <div className='features-icon'>
//                                 <img src={benefit.icon} alt="" width={"7%"} className=''/>
//                                 <h3>{benefit.content}</h3>
//                                 </div>
//                                 <p className='px-5 mb-4'>{benefit.subcontent}</p>
//                             </div>
//                         ))}
//                     </Col>
//                     <Col md={6}>
//                     <img src={image} alt="Benefits of Learning" className="img-fluid rounded-circle" />

//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// }

// export default Features;
import React from 'react';
import './Feature.css'
import { Row, Container, Col } from 'react-bootstrap';
import image from './../../Images/benifits.jpg';
import icon from './../../Images/link-redirect-trace.png.webp';

function Features() {
    const benifits = [
        {
            icon: icon,
            content: "100% project based learning ",
            subcontent: "We build more than 2 real world major projects in each language and don't worry that the project dev..."
        },
        {
            icon: icon,
            content: "Live call supports",
            subcontent: "After joining our course you will get a lot of coding problems because our course is 100% project ba"
        },
        {
            icon: icon,
            content: "High chance of selection",
            subcontent: " If you will do hard works, And if you will follow our instructions, High chance of selections....."
        },
        {
            icon: icon,
            content: "Video Access Timing",
            subcontent: "You can access our videos 24*7 life time, Once you complete your registration...."
        }
    ];

    return (
        <section className='section'>
            <Container fluid className='feature-container container-md container-lg p-3 ps-md-5 ps-lg-5 pe-md-5 pe-lg-5 m-5'>
                <Row className='row align-items-center p-0 m-0 pt-2 flex-md-row flex-lg-row flex-column-reverse'>
                    <Col xs={12} md={6} className='about-contain p-4 mt-5 mt-md-0 mt-lg-0'>
                        <h1 className='p-4'>Benefits of learning</h1>
                        {benifits.map((benefit, index) => (
                            <div key={index} className="">
                                <div className='features-icon'>
                                    <img src={benefit.icon} alt="" width={"7%"} className='' />
                                    <h3>{benefit.content}</h3>
                                </div>
                                <p className=' mb-4'>{benefit.subcontent}</p>
                            </div>
                        ))}
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={image} alt="Benefits of Learning" className="img-fluid rounded-circle" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Features;



