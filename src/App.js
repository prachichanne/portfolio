import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Internship from './components/Internship';
import Achievement from './components/Achievement';

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
function App() {
  return (

    <Router>
      <div className='App'>
        <div class="dark" > 
        <div style={{ padding: "20px", paddingRight: "60px" }} className='nav-bar'>
          <ul class="nav justify-content-end">
            <Link to="/portfolio" style={{fontFamily:"myh1Font",fontSize:"29px",marginRight:"710px"}}>Prachi Channe</Link>
            <li class="nav-item">
              {/* <a  class="nav-link active" href="/">Home</a> */}
              <Link id='link'  to="/about">Education</Link>
            </li>
            <li class="nav-item">
              {/* <a  class="nav-link" href="#">Internship</a> */}
              <Link id='link' to="/internship">Internship</Link>
            </li>
            <li class="nav-item">
              {/* <a  class="nav-link" href="#">Achievement</a> */}
              <Link id='link' to="/achievement">Achievement</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#media" >Media</a> */}
              <Link id='link' to="/gallery">Gallery</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#media" >Media</a> */}
              <Link id='link' to="/contact">Contact</Link>
            </li>
          </ul>


        </div>
        
        <Routes>

          <Route exact path="/portfolio" element={<Home />}> </Route>
            <Route exact path="/about" element={<About />} > </Route>
            <Route exact path="/internship" element={<Internship />} > </Route>
            <Route exact path="/achievement" element={<Achievement />} > </Route>
            <Route exact path="/gallery" element={<Gallery />} > </Route>
            <Route exact path="/contact" element={<Contact />} > </Route>

        </Routes>

       
      </div>
      </div>
    </Router>
    // <BrowserRouter>
    //   <Routes>

    //     <Route path="/" element={<Home />}>
    //       <Route path="/resume" element={<Resume />} />
    //       <Route path="/internship" element={<Internship />} />
    //       <Route path="/achievement" element={<Achievement />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
