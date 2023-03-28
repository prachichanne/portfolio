import React, { Component } from 'react'
import '../mycss.css';
import '../fade-in.css';
import '../design.css';
// import c1 from '../img/prachi.jpeg';
// import Header from './Header';
// import Footer from './Footer';

export default class home extends Component {



    render() {
        return (

            <div class="dark" style={{ height: "590px" }}>
                <div className='final' style={{marginTop:"50px",marginBottom:"60px"}}>
                    <section >
                       
                            <div className='main1'  >
                            <div className='main2'>
                                <div style={{ marginLeft: "15%", marginRight: "15%", marginTop: "10%", padding: "30px", textAlign: "center", }} className='intro'>

                                    <h1>Hey ! I am Prachi.</h1>
                                    <p>  A <a style={{ color: "#C3073F" }}>creative</a>, <a style={{ color: "#66FCF1" }}>tech enthusiast</a>, and also a <a style={{ color: "#FFE400" }}>foodie</a>.
                                        {/* Working hard to make my dreams come true and make a difference. */}
                                    </p>

                                </div>

                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}
