import React, { Component } from 'react'
import '../mycss.css';

import c1 from '../img/prachi.jpeg';
// import Header from './Header';
// import Footer from './Footer';

export default class home extends Component {

  

    render() {
        return (

            <div className='final'>
                {/* <div className='header'>
                    <Header />
                </div> */}
 
                <div style={{ display: "flex" }} className='main'>
                    <div style={{ backgroundColor: "#fff", marginLeft: "10%", marginRight: "1%", marginTop: "3%", marginBottom: "3%", padding: "90px" }} className='intro'>
                        <h1>Welcome</h1>
                        <p >Dr. Suyogkumar Taralkar is a Chemical Engineer with M.Tech and PhD in Chemical Engineering. Dr. Suyogkumar is having wide experience in teaching, administration and research.
                            Dr. Suyogkumar has completed various research projects and currently working on two research projects funded by various government and non government agencies.
                            He handled various administrative positions at an academic institutions related to academics, research, accreditation and quality assurance.
                        </p>


                    </div>
                    <div style={{ width: "170%", marginLeft: "1%", marginRight: "10%", marginTop: "5%", marginBottom: "5%", padding: "9px", textAlign: "center" }} class='container'>

                        <img class="image" alt='okok' style={{ width: "70%", borderRadius: "30px" }} src={c1}></img>
                        <div class="middle">
                            <div class="text">Hey! I am Prachi</div>
                        </div>
                    </div>
                </div> 

                {/* <div className='footer'>
                    <Footer />
                </div> */}
            </div>
        )
    }
}
