import { Col, Container, Row } from "react-bootstrap";

export const LayoutSection = () => (
  <section className="mb-5">
    <h2 className="h4 mb-3">Layout</h2>
    <Container fluid className="border rounded p-3 bg-light">
      <Row>
        <Col md={4} className="bg-primary-subtle p-2">
          Col md=4
        </Col>
        <Col md={8} className="bg-secondary-subtle p-2">
          Col md=8
        </Col>
      </Row>
    </Container>
  </section>
);
