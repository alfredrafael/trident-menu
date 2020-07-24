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
                  Trident Delivery & Pickup
                </DropdownItem>
                <DropdownItem>
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
              <NavLink href="https://www.tridentbookscafe.com/about-us">Sign In</NavLink>
          </NavItem>








        

          </Nav>
{/*      <NavbarText>Simple Text</NavbarText>  */}
        </Collapse>
        <div>
          <div className="d-inline-block align-top" style={{}}>
  
          <ul class="social-icons icon-circle list-unstyled list-inline"
          style={{display: 'flex', justifyContent: 'space-between', paddingTop: '3.4%'}}
          > 
          <li> <a href="#"><i style={{backgroundColor: 'black'}} class="fa fa-twitter"></i></a></li>
          <li> <a href="#"><i style={{backgroundColor: 'black'}} class="fa fa-facebook"></i></a></li> 
          <li> <a href="#"><i style={{backgroundColor: 'black'}} class="fa fa-instagram"></i></a></li> 
          </ul>
          </div>        
        </div>
        </Container>
      </Navbar>
      </React.Fragment>
    );
}


export default NavigationBar;

