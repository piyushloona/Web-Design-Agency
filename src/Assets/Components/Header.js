import React from "react";
import logo from "../images/header_logo.svg";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Accordion from 'react-bootstrap/Accordion';
const Header = () => {
  function for_head() {
    var element = document.body;
    element.classList.toggle("mystyle");
  }
  return (
    <>
    <div className="main_head">
    <div className="header fixed-top">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="w-20">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" ><IndeterminateCheckBoxIcon className="inter"/></Navbar.Toggle>
          <Navbar.Collapse    id="navbarScroll"
          >
            <Nav
              className="me-auto my-2 my-lg-0 ul1 w-55"
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              <Nav.Link href="/" className="for_d">
                Home
                <ul className="dropdown dropdown-toggle ">
                  <div className="dropdown-content">
                    <li>
                      <Link to="/"> HomePage1 </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/"> HomePage2 </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/"> HomePage3 </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/"> HomePage4 </Link>
                    </li>
                    <hr />
                  </div>
                </ul>
              </Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action2">Pages</Nav.Link>

              <Nav.Link href="#action2">Shop</Nav.Link>
              <Nav.Link href="#action2">Contacs</Nav.Link>
             
              <div className="icon">
              {/* <input type="text" placeholder="Search"/> */}
               <Nav.Link><SearchIcon className="search_icon" /></Nav.Link>
              </div>
             
            </Nav>
            <div className="quote  w-25">
            <Button className="get">Get a quote</Button>
            </div>
          </Navbar.Collapse>

         


        </Container>
      </Navbar>
    </div>
    </div>

    <div className="responsive">
    <div className="responsive_head fixed-top">
    <Navbar expand="lg">
    <Container>
      <div className="for_r">
        <div className="logo">
          <img src={logo}/>
        </div>
         <div className="for_button">
        <Navbar.Toggle aria-controls="navbarScroll" ><IndeterminateCheckBoxIcon className="inter"/></Navbar.Toggle>
        </div>
        </div>
        <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 ul1 "
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              {/* <Nav.Link href="/" className="for_d">
                Home
                <ul className="dropdown dropdown-toggle ">
                  <div className="dropdown-content">
                    <li>
                      <Link to="/"> HomePage1 </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/"> HomePage2 </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/"> HomePage3 </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/"> HomePage4 </Link>
                    </li>
                    <hr />
                  </div>
                </ul>
              </Nav.Link> */}

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Home</Accordion.Header>
        <Accordion.Body>
         <ul>
          <li><Link to="/">Home 01</Link></li>
          <li><Link to="/">Home 02</Link></li>
          <li><Link to="/">Home 03</Link></li>
          <li><Link to="/">Home 04</Link></li>
          
         </ul>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action2">Pages</Nav.Link>

              <Nav.Link href="#action2">Shop</Nav.Link>
              <Nav.Link href="#action2">Contacs</Nav.Link>
              <Link to="/"><SearchIcon className="search_icon" /></Link>
            </Nav>
            <div className="quote ">
            <Button className="get">Get a quote</Button>
            </div>
          </Navbar.Collapse>
   

       
    </Container>
    </Navbar>
    </div>
    </div>
    </>
  );
};

export default Header;
