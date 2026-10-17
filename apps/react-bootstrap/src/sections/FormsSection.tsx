import { Form } from "react-bootstrap";

export const FormsSection = () => (
  <section className="mb-5">
    <h2 className="h4 mb-3">Forms</h2>
    <Form className="border rounded p-3">
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="you@example.com" />
      </Form.Group>
      <Form.Check type="checkbox" id="remember" label="Remember me" />
    </Form>
  </section>
);
