import React, { Component } from 'react'
// import '../fade-in.css';
import c1 from '../img/prachi.jpeg';

import '../mycss.css';
import Certificates from './Certificates';
import Project from './Project';

export default class Achievement extends Component {
    render() {
        return (
            <div className='dark' style={{height:"650px"}}>
                {/* <div class="projects">
                    <h2>PROJECTS</h2>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title ">Special title treatment</h5>
                                    <p class="card-text" style={{ fontSize: "20px" }}>With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Source code</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body" >
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text" style={{ fontSize: "20px" }}>With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Source code</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text" style={{ fontSize: "20px" }}>With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Source code</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text" style={{ fontSize: "20px" }}>With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#">Source code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
                <Project />
                <Certificates />
            </div>
        )
    }
}
