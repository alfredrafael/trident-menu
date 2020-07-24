import React, {useEffect, useState, Fragment} from 'react';
import './page1.css';
import Aside from './../Aside';
import { Card, CardBody, Container, CardTitle, CardText, CardImg, CardImgOverlay, CardHeader, CardFooter, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import menuData from '../../menuData.json';
import { $ } from 'jquery';


const drinksMenu = menuData[0].menu.drinks;
const foodMenu = menuData[0].menu.food;
const categoriesMenu = menuData[0].menu.categories


const MainMenu = () => {

    const [foods, setFoods] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [categories, setCategories] = useState([]);


    const goToCategory = (e) => {

        e.preventDefault();
    }


    useEffect(() => {

        setFoods(foodMenu);
        setDrinks(drinksMenu);
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

        <div style={{marginTop: '5%'}}>


        <h3 style={{
                color: 'grey',
                fontWeight: 'bolder',
                marginBottom: '1%',
            }}>
        
        Serving our full menu, all day
        
        </h3>

            <div style={{display: 'flex'}}>
            <div className="row">
            <br/>
                {renderCategories}
            </div>

            <div style={{minWidth: '25%'}}>
            
            <Aside/>
            
            </div>
           
            </div>



        </div>
        </React.Fragment>
    );
}

export default MainMenu