import { useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

export const OverlaysSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mb-5">
      <h2 className="h4 mb-3">Overlays</h2>
      <div className="d-flex gap-2">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tip">Tooltip content</Tooltip>}
        >
          <Button variant="outline-dark">Hover tooltip</Button>
        </OverlayTrigger>
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      </div>
      <Modal show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body content from React Bootstrap Modal.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
