import './Navigation.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';


function Navigation() {
  return (
    <div className="navigation">

        <Navbar fixed="top">
            <Navbar.Brand>
                <Nav.Link href="">Home</Nav.Link>
            </Navbar.Brand>

            <Nav>    
            <Nav.Link href="posts">Posts</Nav.Link>
            <Nav.Link href="posts">Posts</Nav.Link>
            <Nav.Link href="posts">Posts</Nav.Link>
            </Nav>
        </Navbar>


    </div>
  );
}

export default Navigation;
