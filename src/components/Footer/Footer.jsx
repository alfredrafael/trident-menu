import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { StyledFooter } from './StyledFooter';
import './footer.css';


const AppFooter = () => {
    return (
        <React.Fragment>
            <StyledFooter id="footer">
                <Container>


                    <Row>

                        <Col>
                            <span> Copyright Ⓒ [...], 2020 </span>
                        </Col>

                        <Col>
                            <img src='https://alfredorafael.com/wp-content/uploads/2019/02/myLogo.png' alt='Alfredo Rafael Logo' />
                        </Col>

                    </Row>

                </Container>

            </StyledFooter>
        </React.Fragment>
    )
}

export default AppFooter;

