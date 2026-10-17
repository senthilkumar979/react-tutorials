import { Alert, Badge, Spinner } from "react-bootstrap";

export const FeedbackSection = () => (
  <section className="mb-5">
    <h2 className="h4 mb-3">Feedback</h2>
    <Alert variant="info">Informational alert</Alert>
    <div className="d-flex align-items-center gap-3">
      <Badge bg="warning" text="dark">
        Badge
      </Badge>
      <Spinner animation="border" size="sm" />
    </div>
  </section>
);
