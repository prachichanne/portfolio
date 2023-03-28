import React, { Component } from 'react'

export default class Certificates extends Component {
    render() {
        return (
            <div class="projects">
                <div style={{ display: "flex" }} className='heading'>
                    <div className='cert'><h2>CERTIFICATIONS</h2></div>
                    <div className='cert2'><a href='#'><h5 style={{ color: "white" }}> + More Certificates</h5></a></div>
                </div>

                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <a href="#"><p class="card-text" style={{ fontSize: "20px" }}>Microsoft Azure Data Fundamental</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body" >
                                <a href="#"><p class="card-text" style={{ fontSize: "20px" }}>AWS Cloud Foundation</p></a>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <a href="#"><p class="card-text" style={{ fontSize: "20px" }}>AWS Cloud Architect</p></a>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <a href="#"><p class="card-text" style={{ fontSize: "20px" }}>Springboot MVC </p></a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>)
    }
}
