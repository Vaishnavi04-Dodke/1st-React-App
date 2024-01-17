import React from "react";
import { Button } from "react-bootstrap";
import './Banner.css'

function Banner() {
  return (
    <div className="banner text-center py-5 mx-auto">
     <div className="banner-content ">
      <img src="logo192.png" alt="logo" width={120} className="mt-4 mb-3 ease-in-out transition-all"></img>
      <h1>React</h1>
      <h4 className="py-1">The library for web and native user interfaces</h4>
      <Button variant="primary" className="me-2 ">Learn React</Button>
      <Button variant="secondary" className="me-2 Api">API Refrence</Button>
    </div>
    </div>
  );
}

export default Banner;
