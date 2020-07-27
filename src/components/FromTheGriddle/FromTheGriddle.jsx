import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardHeader,
  Button,
  Col,
  Row,
} from "reactstrap";
import Fade from "react-reveal/Fade";
import menuData from "../../menuData.json";

const fromTheGriddleMenu = menuData[0].menu.fromTheGriddle;

console.log(fromTheGriddleMenu);

const FromTheGriddle = () => {
  const [fromTheGriddle, setFromTheGriddleMenu] = useState([]);

  useEffect(() => {
    setFromTheGriddleMenu(fromTheGriddleMenu);
  }, []);

  const renderItems = fromTheGriddle.map((item, i) => {
    return (
      <div key={i} className="col-md-6 col-sm-12">
        <a href={item.url} style={{ textDecoration: "none", color: "inherit" }}>
          <Card
            key={i}
            className="highlight-on-hover"
            style={{
              margin: "2% 1%",
              borderRadius: "15px",
              borderRadius: "7px",
            }}
          >
            <CardHeader
              style={{
                background: "#7a1f1f",
                color: "white",
                height: "20%",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
              }}
            >
              <h4 style={{ margin: "-1% 0", textAlign: "center" }}>
                {item.name}
              </h4>
            </CardHeader>
            <CardImg top width="100%" src={item.image} alt="Card image cap" />
            <CardBody>
              <CardText>{item.description}</CardText>
              <div style={{ float: "right" }}>{item.price}</div>
            </CardBody>
          </Card>
        </a>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div style={{ paddingTop: "3%" }} id="fromTheGriddle">
        <div style={{ display: "flex" }}>
          <h2
            style={{
              fontWeight: "bolder",
              marginBottom: "1%",
            }}
          >
            From The Griddle
          </h2>

          <div style={{ display: "inline", marginLeft: "48.8%" }} className="float-margin">
            &nbsp;
            <i class="arrow left" style={{ marginBottom: ".5%" }}></i>
            &nbsp;
            <Button
              className="back-button-outlined"
              outline
              style={{ border: "1px solid #7a1f1f", color: "#7a1f1f" }}
              href="/"
              bsClass="custom-hover"
              size="sm"
            >
              <span>BACK TO MENU</span>
            </Button>
          </div>
        </div>
        <Fade>
          <div className="row">
            <br />
            {renderItems}
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default FromTheGriddle;
