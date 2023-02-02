import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./demo.css";
function OffcanvasExample() {
  return (
    <>
      <Navbar className="navi" variant="dark">
        <Container fluid>
          <Navbar.Brand className="navb">Notes-GenX</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
