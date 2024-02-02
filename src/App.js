import "./App.css";
import NavBar from "./components/navbar/Navbar";
import MenuBar from "./components/menubar/MenuBar";
import Card from "./components/cards/Card";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MenuBar />
      <Card />
    </div>
  );
}

export default App;
