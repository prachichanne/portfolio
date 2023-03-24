import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Internship from './components/Internship';
import Achievement from './components/Achievement';

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (

    <Router>
      <div className='App'>
        <div style={{ padding: "20px", backgroundColor: "#379683", paddingRight: "60px" }} className='nav-bar'>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              {/* <a  class="nav-link active" href="/">Home</a> */}
              <Link id='link'  to="/">Home</Link>
            </li>
            <li class="nav-item">
              {/* <a  class="nav-link" href="/resume" >Resume</a> */}
              <Link id='link'  to="/resume">Resume</Link>
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
              <Link id='link' to="/media">Media</Link>
            </li>
          </ul>


        </div>
        
        <Routes>

          <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="/resume" element={<Resume />} > </Route>
            <Route exact path="/internship" element={<Internship />} > </Route>
            <Route exact path="/achievement" element={<Achievement />} > </Route>
        </Routes>

        <div id='media' className='footer'>
        <section id="lab_social_icon_footer">
            <div style={{marginBottom:"%"}}class="container">
              <div class="text-center center-block" >
                <a style={{padding:"5px"}} href="mailto:prachichanne820@gmail.com"><i id="social-em" class="fa fa-envelope fa-3x social"></i></a>
                <a style={{padding:"5px"}}  href="https://instagram.com/_that_cynical_brat_?igshid=ZDdkNTZiNTM="><i id="social-em" class="fa fa-instagram fa-3x social"></i></a>
                <a style={{padding:"5px"}} href="https://github.com/prachichanne"><i id="social-em" class="fa fa-github fa-3x social"></i></a>
                <a style={{padding:"5px"}} href="https://www.linkedin.com/in/prachichanne2607/"><i id="social-em" class="fa fa-linkedin fa-3x social"></i></a>

              </div>
            </div>
        </section>
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
