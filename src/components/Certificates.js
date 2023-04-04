import React, { Component } from 'react'
import c2 from '../img/aws_cloud.png';
import c3 from '../img/aws_arch.png';
import c4 from '../img/dp900.png';
import c5 from '../img/spring-boot-logo.png';

export default class Certificates extends Component {
    render() {
        return (
            <div class="certificates">
                <div style={{ display: "flex" }} className='heading'>
                    <div className='cert'><h2>CERTIFICATIONS/COURSES</h2></div>
                    <div className='cert2'><a href='https://drive.google.com/drive/folders/1zhzyuVzwWFNnNePqpK7Vu8JydxrqQF6R?usp=sharing'><h5 style={{ color: "white" }}> + More Certificates</h5></a></div>
                </div>

                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                        <div className='cert_img'>
                                    <img src={c4} alt="Avatar" class="image" style={{ width: "100%",marginTop:"25px" ,marginBottom:"30px"}} />
                                </div>
                            <div class="card-body">
                                <a href="#"><p class="card-text" style={{ fontSize: "20px",color:"white" }}>Microsoft Azure Data Fundamental</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                        <div className='cert_img'>
                                    <img src={c2} alt="Avatar" class="image" style={{ width: "80%" }} />
                                </div>
                            <div class="card-body" >
                                <a href="#"><p class="card-text" style={{ fontSize: "20px" ,color:"white"}}>AWS Cloud Foundation</p></a>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                        <div className='cert_img'>
                                    <img src={c3} alt="Avatar" class="image" style={{ width: "80%" }} />
                                </div>
                            <div class="card-body">
                                <a href="#"><p class="card-text" style={{ fontSize: "20px",color:"white" }}>AWS Cloud Architect</p></a>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                        <div className='cert_img'>
                                    <img src={c5} alt="Avatar" class="image" style={{ width: "80%",marginTop:"30px",marginBottom:"70px" }} />
                                </div>
                            <div class="card-body">
                                <a href="#"><p class="card-text" style={{ fontSize: "20px",color:"white" }}>Springboot MVC </p></a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>)
    }
}
