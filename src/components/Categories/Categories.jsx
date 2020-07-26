import React, {useEffect, useState, Fragment} from 'react';
import './categories.css';
import Aside from './../Aside';
import { Card, CardBody, Container, CardTitle, CardText, CardImg, CardImgOverlay, CardHeader, CardFooter, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import menuData from '../../menuData.json';
import { $ } from 'jquery';


const categoriesMenu = menuData[0].menu.categories


const MainMenu = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {

        setCategories(categoriesMenu);

    }, []);

    const renderCategories = categories.map((item, i) => {
        return <div key={i} className="col-md-6 col-sm-12">
        
        <a href={item.categoryUrl} style={{textDecoration: 'none', color: 'inherit'}}>
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
        
        Serving our full menu, all day
        
        </h2>

            <div style={{display: 'flex'}}>
            <div className="row">
            <br/>
                {renderCategories}
            </div>

            <div className="menuAside" style={{minWidth: '20%', marginLeft:'3%'}}>
            
            <Aside/>
            
            </div>
           
            </div>



        </div>
        </React.Fragment>
    );
}

export default MainMenu