
import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <main className=" relative min-h-screen w-schreen overflow-x-hidden ">
      <Navbar />
      <Hero />   
      <About />
      <Features/>
    </main>
  );
}

export default App;
