import 'bootstrap/dist/css/bootstrap.css';
import "./Navigation.css"
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';


function Navigation() {
  return (
    <div className="big-navigation">

        <Navbar className="navigation" collaspseOnSelect sticky="top" expand='xl'>
            <Container>
                <Navbar.Toggle aria-controls="responisve-navbar-nav" />
                <Navbar.Collapse id="response-navbar-nav">
                    <Navbar.Brand>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Navbar.Brand>
                    <Nav>
                        
                        <Nav.Link href="1">About</Nav.Link>
                        <Nav.Link href="2">Experience</Nav.Link>
                        <Nav.Link href="3">Posts</Nav.Link>
                        <Nav.Link href="3">Contact</Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </div>
  );
}

export default Navigation;
