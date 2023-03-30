import SingleBook from "./SingleBook";
import { Col } from "react-bootstrap";

const BookList = props => {
  return props.books.map((book, i) => {
    return (
      <Col md={4} lg={3} className="mt-5">
        <SingleBook key={i} book={book} />
      </Col>
    );
  });
};

export default BookList;
