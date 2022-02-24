import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
import Home from './pages/home/Home';
import Rentals from './pages/rentals/Rentals';
import Faqs from './pages/faqs/Faqs';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/rentals" element={ <Rentals /> } />
          <Route path="/faqs" element={ <Faqs /> } />
          <Route path="/reservations" element={ <Contact /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
