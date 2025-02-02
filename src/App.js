import { NavBar } from "./components/Navbar/navbar.js";
import { Banner } from "./components/Banner/banner.js";
import { Skills } from "./components/Skills/skills.js";
import { Projects } from "./components/Projects/projects.js";
import { Contact } from "./components/Contact/contact.js";
import { Footer } from "./components/Footer/footer.js";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
