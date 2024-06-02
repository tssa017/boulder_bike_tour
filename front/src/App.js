import './output.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

// Nav items
import About from './components/about/About';
import Photos from './components/photos/Photos';
import Bikers from './components/bikers/Bikers';
import Contest from './components/contest/Contest';
import Media from './components/media/Media';
import Contact from './components/contact/Contact';

function App() {
    return (
        <Router>
            <Header />
            <Nav />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/bikers" element={<Bikers />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/media" element={<Media />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
