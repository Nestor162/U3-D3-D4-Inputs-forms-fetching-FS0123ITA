import { Component } from "react";
import MyCards from "./MyCards.jsx";
import MyPills from "./MyPills";
import fantasy from "../data/fantasy.json";
import { Row, Container } from "react-bootstrap";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Container>
          <h3>Seleziona Categoria:</h3>
          <MyPills onCategoryChange={this.handleCategoryChange} />
          <Row>
            <h2 id="Fantasy">Fantasy</h2>
            {fantasy.map((book, index) => (
              <MyCards
                key={`book-${index}`}
                title={book.title}
                src={book.img}
                price={book.price}
                category={book.category}
              />
            ))}
          </Row>

          <Row>
            <h2 id="Sci-Fi">Sci-Fi</h2>
            {scifi.map((book, index) => (
              <MyCards
                key={`book-${index}`}
                title={book.title}
                src={book.img}
                price={book.price}
                category={book.category}
              />
            ))}
          </Row>

          <Row>
            <h2 id="History">History</h2>
            {history.map((book, index) => (
              <MyCards
                key={`book-${index}`}
                title={book.title}
                src={book.img}
                price={book.price}
                category={book.category}
              />
            ))}
          </Row>

          <Row>
            <h2 id="Horror">Horror</h2>
            {horror.map((book, index) => (
              <MyCards
                key={`book-${index}`}
                title={book.title}
                src={book.img}
                price={book.price}
                category={book.category}
              />
            ))}
          </Row>

          <Row>
            <h2 id="Romance">Romance</h2>
            {romance.map((book, index) => (
              <MyCards
                key={`book-${index}`}
                title={book.title}
                src={book.img}
                price={book.price}
                category={book.category}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
