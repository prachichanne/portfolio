import React, { Component } from 'react'
// import c1 from '../img/prachi.jpeg';
import '../mycss.css';

export default class Contact extends Component {
    render() {
        return (
          
                <div style={{display:"flex"}} id='media' className='footer'>
                    <form className='contact_form'>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input style={{backgroundColor:"#282828",border:"none"}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea style={{backgroundColor:"#282828",border:"none"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                    <section id="lab_social_icon_footer" className='icons'>
                        <div style={{ marginBottom: "%" }} class="container">
                            <div class="text-center center-block" >
                                <a style={{ padding: "5px" }} href="mailto:prachichanne820@gmail.com"><i id="social-em" class="fa fa-envelope fa-5x social"></i></a>
                                <a style={{ padding: "5px" }} href="https://instagram.com/_that_cynical_brat_?igshid=ZDdkNTZiNTM="><i id="social-em" class="fa fa-instagram fa-5x social"></i></a>
                                <a style={{ padding: "5px" }} href="https://github.com/prachichanne"><i id="social-em" class="fa fa-github fa-5x social"></i></a>
                                <a style={{ padding: "5px" }} href="https://www.linkedin.com/in/prachichanne2607/"><i id="social-em" class="fa fa-linkedin fa-5x social"></i></a>

                            </div>
                        </div>
                    </section>



                </div>
         
        )
    }
}
