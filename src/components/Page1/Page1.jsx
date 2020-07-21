import React, {useEffect, useState, Fragment} from 'react';
import './page1.css';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import menuData from '../../menuData.json';
import { $ } from 'jquery';


const drinksMenu = menuData[0].menu.drinks;
const foodMenu = menuData[0].menu.food;

const Menu = () => {

    const [foods, setFoods] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {

        setFoods(foodMenu);
        setDrinks(drinksMenu);

    }, []);

    const renderFoods = foods.map((item, i) => {
        return <div key={i} style={{display: 'flex'}}>
            <p>{item.name}</p> &nbsp;
            <p>{item.price}</p>
        </div>
    })

    const renderDrinks = drinks.map((item, i) => {
        return <div key={i} style={{display: 'flex'}}>
            <p>{item.name}</p> &nbsp;
            <p>{item.price}</p>
            <small>{item.description}</small>
        </div>
    })
        

console.log('Drinks: ', drinksMenu);
console.log('Food : ', foodMenu);
console.log('Food from State: ', foods)
console.log('Drinks from State: ', drinks)

    

    return (
  
        <React.Fragment>


        <Container id="page-1">
            <div style={{height: '100vh'}}>
                    <h1>Page 1</h1>
                    <br/>
                    {renderFoods}
                    <hr/>
                    {renderDrinks}
            </div>
        </Container>


        </React.Fragment>
    );
}

export default Menu