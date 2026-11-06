import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
        <Navbar />

        <main>
          <Hero />
          <Services />
          <Projects />
          <Contacts />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
