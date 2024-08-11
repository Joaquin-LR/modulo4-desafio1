import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample(props) {
  const total = 25000;
  const token = false; // Puedes cambiar este valor para probar
  const formattedTotal = total.toLocaleString('es-CL');

  return (
    <Navbar expand="lg" variant="dark" className="bg-dark custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#">{props.navtitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button variant="outline-light">{props.navhome}</Button>
            {token ? (
              <>
                <Button variant="outline-light">🔒 Profile</Button>
                <Button variant="outline-light">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light">{props.navlogin}</Button>
                <Button variant="outline-light">{props.navregister}</Button>
              </>
            )}
          </Nav>
          <Button variant="outline-info">{props.navbutton}{formattedTotal}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
