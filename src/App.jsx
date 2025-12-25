
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Footer from "./components/Footer";

function App() {
  return (
    <main className=" relative min-h-screen w-schreen overflow-x-hidden ">
      <Navbar />
      <Hero />   
      <About />
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>

    </main>
  );
}

export default App;
