import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {
    Cart,
    Facebook,
    HouseFill,
    Hr,
    Instagram,
    ListUl,
    PersonFill,
    Pinterest,
    Search,
    Twitter
} from "react-bootstrap-icons";
import {Container, Nav, Navbar, NavDropdown, Image, Row, Col, NavItem, ListGroup,ListGroupItem} from "react-bootstrap";

const TopMenu = () => (
    <Navbar bg="light" expand="md">
            <Container>
                    <Nav className="me-auto">
                            <Nav.Link><Facebook/></Nav.Link>
                            <Nav.Link><Twitter/></Nav.Link>
                            <Nav.Link><Pinterest/></Nav.Link>
                            <Nav.Link><Instagram/></Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                            <Nav.Link><HouseFill/> </Nav.Link>
                            <Nav.Link><Search/> </Nav.Link>
                            <Nav.Link><PersonFill/> </Nav.Link>
                            <NavDropdown title={<Cart/>}>
                                    <NavDropdown.Item></NavDropdown.Item>
                                    <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
                            </NavDropdown>
                    </Nav>
            </Container>
    </Navbar>
);

const IslandSnowLogo = () => (

    <Row className="justify-content-md-center">
        <Navbar>
                <Col>
                <Image
                src={"https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png"} className={"img-fluid rounded mx-auto d-block py-1"}/>
                </Col>
        </Navbar>
    </Row>
);

const MiddleMenu = () => (
    <Navbar expand={"sm"} >
        <Container className="justify-content-md-center">
        <Nav>
            <NavDropdown title={"MENS"}><NavDropdown.Item></NavDropdown.Item></NavDropdown>
            <NavDropdown title={"WOMEN"}><NavDropdown.Item></NavDropdown.Item></NavDropdown>
            <NavDropdown title={"CHILDREN"}><NavDropdown.Item></NavDropdown.Item></NavDropdown>
            <NavItem><Nav.Link>SEARCH</Nav.Link></NavItem>
        </Nav>
        </Container>
    </Navbar>
);

const FullWidthImage = () => (
    <Row>

            <Image
                src={"https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"} fluid={true}/>

    </Row>
);

const FooterMenu = () => (
    <Container  className={"footer"} fluid={true}>
    <Row className={"pt-4"}>

        <Col>
            <ul>
        NAVIGATION
            <hr/>
            <li>About Us </li>
            <li>Employment </li>
            <li>Videos</li>
        </ul>
        </Col>
        <Col>
            <ul>
              MAIN MENU
                <hr/>
                <li>Men </li>
                <li>Women </li>
                <li>Kids</li>
            </ul>
        </Col>
        <Col>
            <ul>
                CONNECT
                <hr/>
                <li>Sign up for the latest updates</li>
                <li className={"pt-2"}><input type="text" placeholder="Enter Email Address"/>
                    <button className="btn btn-dark">Join</button>
                </li>
            </ul>
        </Col>

    </Row>
</Container>

);

const IslandSnow = () => (
    <Container fluid={true}>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
    </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);