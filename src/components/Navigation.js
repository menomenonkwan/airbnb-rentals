import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
// styles
import './Navigation.css';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" className="sticky-top bg-light">
      <Container fluid className="px-3">
        <Navbar.Brand className="brand pb-0 d-flex justify-content-center align-items-center"><Link to="/" className="fw-bold text-dark">getawaysBNB</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto lead">
            <NavLink to="/" className="text-dark ms-4 mt-3 mt-md-0">Home</NavLink>
            <NavLink to="/rentals" className="text-dark ms-4 mt-3 mt-md-0">Rentals</NavLink>
            <NavLink to="#" className="text-dark ms-4 mt-3 mt-md-0">Faqs</NavLink>
            <NavLink to="#" className="text-dark ms-4 mt-3 mt-md-0">Reservations</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
