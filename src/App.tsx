import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderOnline from './pages/OrderOnline';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<OrderOnline />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;