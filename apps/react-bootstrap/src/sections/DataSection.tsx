import { Card, ListGroup, Table } from "react-bootstrap";

export const DataSection = () => (
  <section className="mb-5">
    <h2 className="h4 mb-3">Data display</h2>
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Card</Card.Title>
        <Card.Text>Short card body for teaching layout.</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>List item A</ListGroup.Item>
        <ListGroup.Item>List item B</ListGroup.Item>
      </ListGroup>
    </Card>
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ada</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Grace</td>
        </tr>
      </tbody>
    </Table>
  </section>
);
