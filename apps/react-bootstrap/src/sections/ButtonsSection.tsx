import { Button, ButtonGroup } from "react-bootstrap";

export const ButtonsSection = () => (
  <section className="mb-5">
    <h2 className="h4 mb-3">Buttons</h2>
    <ButtonGroup>
      <Button variant="primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="success">Success</Button>
    </ButtonGroup>
  </section>
);
