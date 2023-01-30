import "./styles/main.css"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Project />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
