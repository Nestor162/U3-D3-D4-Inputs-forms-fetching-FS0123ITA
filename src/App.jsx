import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App position-relative bg-light">
      <MyNav />
      <Welcome />
      <Container>
        <Row>
          <BookList books={fantasy} />
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
