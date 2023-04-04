import React, { Component } from 'react';
import '../mycss.css';
export default class Project extends Component {
    render() {
        return (
            <div class="projects">
                 <div style={{ display: "flex" }} className='heading'>
                    <div className='cert'><h2>PROJECTS</h2></div>
                    <div className='cert2'><a href='https://github.com/prachichanne?tab=repositories'><h5 style={{ color: "white" }}> + More Projects </h5></a></div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                            <p class="card-text" style={{ fontSize: "20px" }}>DBMS for Bus Managment</p>
                                JSP-MySQL-HTML
                                <br/><br/>
                                <a href="#">Source code</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body" >
                            <p class="card-text" style={{ fontSize: "20px" }}>Product Rating Website</p>
                           ReactJS-MySQL-NodeJS
                                <br/><br/>
                                <a href="#">Source code</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                            <p class="card-text" style={{ fontSize: "20px" }}>JSP Crud Store Management</p>
                                Advance Java
                                <br/><br/>
                                <a href="#">Source code</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text" style={{ fontSize: "20px" }}>Baarcode Generator</p>
                                Springboot-MongoDB-React
                                <br/><br/>
                                <a href="#">Source code</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
