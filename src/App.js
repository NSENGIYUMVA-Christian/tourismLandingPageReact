import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Service from "./components/Service";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
