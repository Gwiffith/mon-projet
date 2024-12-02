import React from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
