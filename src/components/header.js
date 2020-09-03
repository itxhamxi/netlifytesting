import PropTypes from "prop-types"
import React, { useState } from 'react';
import {Link} from 'gatsby'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    
    
} from 'reactstrap';

const Header = ({siteTitle}) =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
  
  <div className="main-nav">
  <Navbar style={{backgroundColor:'white'}} fixed="top" light expand="md">
    <div className="container">
  <NavbarBrand href="/"><span className="main-title"><span className="nav-title-how">How</span><span className="nav-title-to">To</span><span className="nav-title-drones">Drones</span></span></NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/"><span className="nav-title"><h6 className="nav-title">Home</h6></span></Link>
        </NavItem>
        <NavItem>
          <Link to="/about"><span className="nav-title"><h6  className="nav-title">About</h6></span></Link>
        </NavItem> 
       
        
      </Nav>
    
    </Collapse>
    </div>
  </Navbar>
</div>
)
 }

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header
