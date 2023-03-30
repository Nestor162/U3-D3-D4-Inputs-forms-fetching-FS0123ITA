import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App position-relative bg-light">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
