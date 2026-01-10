import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Stats from './components/Stats';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <Stats />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
