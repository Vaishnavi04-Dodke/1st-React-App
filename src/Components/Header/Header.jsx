import React from "react";
// Bootstrap import
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
// router dom import
import { Link } from "react-router-dom";
// JSON api import
import Navlink from "./Navlink/Navlink.json";
import CompanyDetails from "../CompanyDetails/CompanyDetails.json";
// css import
import "./Header.css";

// creating function for Navlink

function Mainmenu(link) {
  // function Mainmenu({ link }) {
  return (
    <>
      <Link
        to={link.demo.Link}
        className={link.demo.IsButton ? "btn btn-primary" : "nav-link"}
      >
        {link.demo.Navlink}
      </Link>
      {/* <Link to={link.Link} className="nav-link">
        {link.Navlink}
      </Link>
    */}
    </>
  );
}

// creating function for Navlink dropdown
function DropdownMenu({ link }) {
  return (
    <>
      <NavDropdown title={link.Navlink} id="basic-nav-dropdown">
        {link.Dropdown.map((data, index) => {
          return <Mainmenu demo={data} key={index} />;
        })}
      </NavDropdown>
    </>
  );
}

function Header() {
  console.log(CompanyDetails);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Link to="/home" className="navbar-brand ">
            {/* <img src="logo192.png" width={50} alt="Logo" /> */}
            <img
              src={CompanyDetails.Logo}
              alt={`${CompanyDetails.CompanyName} Logo`}
              width={"35"}
              className="me-2"
            />
            {CompanyDetails.CompanyName}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <button className="d-flex align-items-center Header-search">
              <FontAwesomeIcon icon={faSearch} style={{ marginRight: "8px" }} />
              Search
              <span className="ms-auto hidden sm:flex item-center me-1">
                <kbd
                  style={{ background: "white", color: "rgb(153 161 179)" }}
                  className="w-10 h-5 border border-transparent me-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md"
                  data-platform="win"
                >
                  Ctrl
                </kbd>
                <kbd
                  style={{ background: "white", color: "rgb(153 161 179)" }}
                  className="w-5 h-5 border border-transparent me-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md"
                >
                  K
                </kbd>
              </span>
            </button>
            <Nav className="ms-auto">
              {Navlink.map((item, index) => {
                if (item.Isdropdown) {
                  return <DropdownMenu link={item} index={index} key={index} />;
                }

                return (
                  // <Link key={index} to={item.Link} className="nav-link">
                  //   {item.Navlink}
                  // </Link>

                  // <Mainmenu link={item} index={index} key={index} />
                  <Mainmenu demo={item} index={index} key={index} />
                );
              })}
            </Nav>

            <Link to="/github" className="nav-link icon-git">
              <FaGithub />
            </Link>

            <Link to="/darkmode" className="nav-link icon">
              <MdDarkMode />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
