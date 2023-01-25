import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import "./styles/main.css"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
