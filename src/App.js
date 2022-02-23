import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
import Home from './pages/home/Home';
import Footer from './components/Footer';

// styles
import './App.css';
import Rentals from './pages/rentals/Rentals';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/rentals" element={ <Rentals /> } />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
