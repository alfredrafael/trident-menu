import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import $ from 'jquery';


const NavigationBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onConstructionMessage = () => {
    alert('Hello! This feature is under construction')
  };


    return (
      <React.Fragment>



      <Navbar style={{background: 'white'}} color="" light expand="md" sticky={'top'} className="fixed-top">
      <Container>

      {/* Start working with its mobile version: removes aside, social icons smaller, add links to current page(s), more components, more real data... */}
        <NavbarBrand style={{width: '80%', marginRight: '-23%'}} href="/">
          <img 
          src='https://www.alfredorafael.com/wp-content/uploads/2020/07/Alfredo_LogoAndText_Trident.png' 
          style={{
            maxWidth: '43%'
          }}/>
        </NavbarBrand>

        





        <NavbarToggler onClick={toggle} />


        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{paddingLeft: '-3%'}}>




            <NavItem id="about-link">
              <NavLink href="https://www.tridentbookscafe.com/about-us">About</NavLink>
            </NavItem>


            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Order
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a style={{fontWeight: '200', textDecoration: 'none'}} href="https://www.toasttab.com/the-trident/v3#!/"> Trident Delivery & Pickup</a>
                </DropdownItem>
                <DropdownItem onClick={onConstructionMessage}>
                  Third Party Delivery Partners
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>


            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Books
              </DropdownItem>
              <DropdownItem>
                Gifts
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Cards
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>


          <NavItem>
              <NavLink href="https://www.tridentbookscafe.com/user?destination=node/11">Sign In</NavLink>
          </NavItem>








        

          </Nav>
{/*      <NavbarText>Simple Text</NavbarText>  */}
        </Collapse>
        <div>
          <div className="d-inline-block align-top" style={{}}>
  
          <ul class="social-icons icon-circle list-unstyled list-inline"
          style={{display: 'flex', justifyContent: 'space-between', paddingTop: '3.4%'}}
          > 
          <li> <a href="https://twitter.com/tridentbooks" target="_blank"><i style={{backgroundColor: 'black'}} className="fa fa-twitter"></i></a></li>
          <li> <a href="https://www.facebook.com/tridentbookscafe/" target="_blank"><i style={{backgroundColor: 'black'}} class="fa fa-facebook"></i></a></li> 
          <li> <a href="https://www.instagram.com/tridentbooks/" target="_blank"><i style={{backgroundColor: 'black'}} class="fa fa-instagram"></i></a></li> 
          </ul>
          </div>        
        </div>
        </Container>
      </Navbar>
      </React.Fragment>
    );
}


export default NavigationBar;

