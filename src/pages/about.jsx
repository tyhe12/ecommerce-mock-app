import React from 'react';

import Container from 'react-bootstrap/Container'

function About(props) {
    return (
        <Container>
            <h1>This is About page</h1>

            <h2>This app is made with <a href="https://fakestoreapi.com/">fakestoreapi</a> mock data</h2>
        </Container>
    )
}

export default About