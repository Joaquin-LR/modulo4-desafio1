import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// AQUÍ QUISE PROBAR CON Y SIN DESTRUCTURING
// EN ESTE COMPONENTE SIN, Y EN EL DE "CARDPIZZA" CON
function NavBar(props) { // FUNCTION CON CamelCase PORQUE SI NO, DA ERROR
  const total = 25000;
  const token = false; //   VALOR POR DEFECTO DE TOKEN, YA QUE EN ESTE DESAFÍO NO HAY LOG IN
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

            <Button variant="outline-light">{props.home}</Button>{/* BOTON HOME */}

            {/* OPERADOR TERNARIO DE SIMULACIÓN */}
            <Button variant="outline-light">{token ? (props.profile): (props.login)}</Button>
            <Button variant="outline-light">{token ? (props.logout): (props.register)}</Button>
          </Nav>
          <Button variant="outline-info">{props.total}{formattedTotal}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
