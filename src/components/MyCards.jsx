import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

function BasicExample(props) {
  return (
    <Col xs="3" className="mb-5">
      <Card className="h-100">
        <Image fluid variant="top" src={props.src} />

        <Card.Body className="d-flex flex-column justify-content-around">
          <Card.Title className="text-truncate">{props.title}</Card.Title>

          <h5>
            Prezzo:
            <Badge bg="success" className="ms-2">
              {props.price}€
            </Badge>
          </h5>
          <h5>
            Categoria:
            <Badge bg="secondary" className="ms-2">
              {props.category}
            </Badge>
          </h5>

          <Button variant="primary" className="w-100">
            Scopri di più...
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BasicExample;
