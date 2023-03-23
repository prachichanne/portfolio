import React, { Component } from 'react'
// import Footer from './Footer'

import { Link ,Outlet} from 'react-router-dom';

import '../mycss.css';
// import Resume from './Resume';
// import Home from './Home';
// import Internship from './Internship';
// import Achievement from './Achievement';


export default class Header extends Component {



    render() {


        return (

            <div style={{ padding: "20px", backgroundColor: "#379683", paddingRight: "60px" }} className='nav-bar'>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        {/* <a  class="nav-link active" href="/">Home</a> */}
                        <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a  class="nav-link" href="/resume" >Resume</a> */}
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a  class="nav-link" href="#">Internship</a> */}
                        <Link to="/internship">Internship</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a  class="nav-link" href="#">Achievement</a> */}
                        <Link to="/achievement">Achievement</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#media" >Media</a>

                    </li>
                </ul>
                <Outlet />

            </div>



        )
    }
}
