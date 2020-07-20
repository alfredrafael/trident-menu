import React from 'react';
import './page1.css';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';





const About = () => {
    return (
  
        <React.Fragment>


        <Container id="page-1">
        <Fade>
            <div style={{height: '100vh'}}>
                    <h1>Page 1</h1>
            </div>
        </Fade>
        </Container>


        </React.Fragment>
    );
}

export default About