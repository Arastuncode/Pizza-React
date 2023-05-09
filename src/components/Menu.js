import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand className="fs-2" href="#home"><Link className="text-white text-decoration-none" to="/Main">Logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing"><Link className="text-white text-decoration-none" to="/Pricing">Pricing</Link></Nav.Link>
            <Nav.Link href="#features"><Link className="text-white text-decoration-none" to="/Features">Features</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;