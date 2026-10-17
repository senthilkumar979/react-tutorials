import { Nav, Navbar } from "react-bootstrap";

export const NavigationSection = () => (
  <section className="mb-5">
    <h2 className="h4 mb-3">Navigation</h2>
    <Navbar bg="dark" data-bs-theme="dark" className="px-3 rounded">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
    </Navbar>
  </section>
);
