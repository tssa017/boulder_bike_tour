import './output.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

// Nav items
import Home from './components/home/Home';
import About from './components/about/About';
import Photos from './components/photos/Photos';
import Bikers from './components/bikers/Bikers';
import Location from './components/location/Location';
import Contest from './components/contest/Contest';
import Contact from './components/contact/Contact';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/bikers" element={<Bikers />} />
                <Route path="/location" element={<Location />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
