import React, {useState, useEffect, Fragment}from 'react';
import { Card, CardBody, Container, CardTitle, CardText, CardImg, CardImgOverlay, CardHeader, CardFooter, Button } from 'reactstrap';
import './burgers.css';
import Aside from './../Aside';
import Fade from 'react-reveal/Fade';
import menuData from '../../menuData.json';
import { $ } from 'jquery';


const burgersMenu = menuData[0].menu.burgers;

console.log(burgersMenu);

const HotDrinks = () => {
    
    
    const [burgers, setBurgers] = useState([]);
    

    useEffect(() => {

        setBurgers(burgersMenu);

    }, []);

    const renderBurgers = burgers.map((item, i) => {
        return <div key={i} className="col-md-6 col-sm-12">
        
        <a href={item.url} style={{textDecoration: 'none', color: 'inherit'}}>
        <Card key={i} className="highlight-on-hover" style={{margin: '2% 1%', borderRadius: '15px'}}>
        <CardHeader style={{background: '#7a1f1f', color: 'white', height: '20%', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
            <h4 style={{margin: '-1% 0'}}>{item.name}</h4>
        </CardHeader>
        
        <CardBody>
        <CardText style={{textDecoration: 'none', color: 'inherit'}} >{item.description}</CardText>
        
        </CardBody>
        </Card>
        </a>
        </div> 
    });

    return (
  
        <React.Fragment>
        <div style={{paddingTop: '3%'}}>


<h2 style={{
        fontWeight: 'bolder',
        marginBottom: '1%',
    }}>

    Our Burgers 
    <Button className='my-back-button' style={{marginLeft: '32%', background: '#7a1f1f', color: 'white', textDecoration: 'none'}}> 
    <a href="/">BACK TO MAIN MENU</a></Button>

</h2>

    <div style={{display: 'flex'}}>
    <div className="row">
    <br/>
        {renderBurgers}
    </div>

  

   
    </div>



</div>


        </React.Fragment>
    );
}

export default HotDrinks