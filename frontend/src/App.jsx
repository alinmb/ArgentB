import "../src/style/App.scss";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero/Hero";
import Features from "../src/components/Features/Features";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
