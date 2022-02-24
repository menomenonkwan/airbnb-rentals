import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

// styles
import './Navigation.scss';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="light" className="navbar">
      <Container fluid className="px-3">
        <Navbar.Brand className="fw-bold brand"><Nav.Link href="/">GroundBnB</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ms-5 ms-sm-auto lead">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/rentals">
              <Nav.Link>Rentals</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faqs">
              <Nav.Link>Faqs</Nav.Link>
            </LinkContainer>
            
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <LinkContainer to="/reservations">
                <NavDropdown.Item href="/reservations">Reservations</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}








