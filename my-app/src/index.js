import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';

const TopMenu = () => (
    <h1>TopMenu</h1>
);

const IslandSnowLogo = () => (
    <h1>IslandSnowLogo</h1>
);

const MiddleMenu = () => (
    <h1>MiddleMenu</h1>
);

const FullWidthImage = () => (
    <h1>FullWidthImage</h1>
);

const FooterMenu = () => (
    <h1>FooterMenu</h1>
);

const IslandSnow = () => (
    <Container>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
    </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);