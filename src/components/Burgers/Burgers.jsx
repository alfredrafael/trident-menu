import React, {useEffect, useState, Fragment} from 'react';
import './burgers.css';
import { Card, CardBody, Container, CardTitle, CardText, CardImg, CardImgOverlay, CardHeader, CardFooter, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import menuData from '../../menuData.json';
import { $ } from 'jquery';


const burgersMenu = menuData[0].menu.burgers;

const Burgers = () => {

    const [burgers, setBurgers] = useState([]);

    const goToCategory = (e) => {

        e.preventDefault();
    }


    useEffect(() => {

        setBurgers(burgersMenu);

    }, []);

    const renderBurgers = burgers.map((item, i) => {
        return <div key={i} className="col-md-6 col-sm-12">
        
        <a href={item.categoryUrl} style={{textDecoration: 'none', color: 'inherit'}}>
        <Card key={i} className="highlight-on-hover" style={{margin: '2% 1%', borderRadius: '15px'}}>
        <CardHeader style={{background: '#7a1f1f', color: 'white', height: '20%', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
            <h3 style={{margin: '-1% 0'}}>{item.name}</h3>
        </CardHeader>
        
        <CardBody>
        <CardText style={{textDecoration: 'none', color: 'inherit'}} >{item.description}</CardText>
        
        </CardBody>
        <CardFooter>Footer</CardFooter>
        </Card>
        </a>
        </div> 
    });

    return (
  
        <React.Fragment>


        <Container id="page-1" className="container-flex">
        <h1>Our Burgers</h1>

            <div className= "row">
                <br/>
                {renderBurgers}
            </div>
        <br/>
        </Container>


        </React.Fragment>
    );
}

export default Burgers