import { Card, Badge, Button } from "react-bootstrap";

function SingleBook(props) {
  return (
    <Card className="h-100">
      <Card.Img className="img-fluid" variant="top" src={props.book.img} />
      <Card.Body className="d-flex flex-column justify-content-around">
        <Card.Title className="text-truncate">{props.book.title}</Card.Title>
        <h5>
          Prezzo:
          <Badge bg="success" className="ms-2">
            {props.book.price}€
          </Badge>
        </h5>
        <h5>
          Categoria:
          <Badge bg="secondary" className="ms-2">
            {props.book.category}
          </Badge>
        </h5>

        <Button variant="primary" className="w-100">
          Scopri di più...
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
