import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
  const [place, setPlace] = useState("");

  function handleChange(event) {
    setPlace(event.target.value);
  }
  
  function handleClick() {
    props.addPlace(place);
    setPlace("");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Weather</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              autoComplete='off'
              type="text"
              placeholder="Add a Place Name"
              className="me-2"
              name="place"
              onChange={handleChange}
              value={place}
            />
            <Button onClick={handleClick} variant="outline-success">GO</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;