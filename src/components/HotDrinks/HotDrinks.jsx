import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Container,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardHeader,
  CardFooter,
  Button,
  Col,
  Row,
} from "reactstrap";
import "./hotDrinks.css";
import Fade from "react-reveal/Fade";
import menuData from "../../menuData.json";
import { $ } from "jquery";
import Aside from "./../Aside";

const hotDrinksMenu = menuData[0].menu.hotDrinks;

console.log(hotDrinksMenu);

const HotDrinks = () => {
  const [hotDrinks, setHotDrinks] = useState([]);

  useEffect(() => {
    setHotDrinks(hotDrinksMenu);
  }, []);

  const renderDrinks = hotDrinks.map((item, i) => {
    return (
      <div key={i} className="col-md-6 col-sm-12">
        <a href={item.url} style={{ textDecoration: "none", color: "inherit" }}>
          <Card
            key={i}
            className="highlight-on-hover"
            style={{ margin: "2% 1%", borderRadius: "15px" }}
          >
            <CardHeader
              style={{
                background: "#7a1f1f",
                color: "white",
                height: "20%",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              <Row style={{ justifyContent: "space-between" }}>
                <h4 style={{ margin: "-1% 0", marginLeft: "1.6%" }}>
                  {item.name}
                </h4>
                <small
                  style={{
                    fontSize: "105%",
                    marginRight: "1.6%",
                    fontWeight: "bold",
                  }}
                >
                  {item.price}
                </small>
              </Row>
            </CardHeader>

            <CardBody style={{}}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: "2" }}>
                  <CardText
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.description}
                  </CardText>
                </div>

                <div style={{ flex: "1", marginRight: "-10%" }}>
                  <img
                    src={
                      "https://www.alfredorafael.com/wp-content/uploads/2020/07/coffee_example.png"
                    }
                    style={{
                      maxWidth: "70%",
                      borderRadius: "15px",
                      marginLeft: "5%",
                    }}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </a>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div style={{ paddingTop: "3%" }}>
        <h2
          style={{
            fontWeight: "bolder",
            marginBottom: "1%",
          }}
        >
          Hot Drinks
          <Button
            className="my-back-button"
            style={{
              marginLeft: "65%",
              background: "#7a1f1f",
              color: "white",
              textDecoration: "none",
            }}
          >
            <a href="/drinks">BACK TO DRINKS</a>
          </Button>
        </h2>

        <div className="row">
          <br />
          {renderDrinks}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HotDrinks;
