import React, {useEffect, useState, Fragment} from 'react';
import './page1.css';
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
        <h1>Our Menu</h1>

            <div className= "row">
                <br/>
                {renderCategories}
            </div>
        <br/>
        </Container>


        </React.Fragment>
    );
}

export default MainMenu



    
    // e.preventDefault();

    // const clickedItem = e.target.innerText;



    // const matchedCategoryDescription = categories.map((item, i) => {
    //     return item.description
    // })
    // const matchedCategoryName = categories.map((item, i) => {
    //     return item.name;
    // })

    // console.log(matchedCategoryDescription);

    // console.log(matchedCategoryName);

        
    //   if(clickedItem === matchedCategoryName){
    //     return alert(matchedCategoryName); 
    // } else if(clickedItem === matchedCategoryDescription){
    //     return alert(matchedCategoryDescription); 
    // } else {
    //     alert('none');
    // }


     //   return console.log("CLICKED", clickedItem)

// if item clicked is X, it means Y, else, it means Z... etc... 
// const dynamicUrl = (urlSlug === '/espanol')? '/' : '/espanol';