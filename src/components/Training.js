import React, { Component } from 'react'
// import '../mycss.css';
import c1 from '../img/zensar.png';
import c2 from '../img/authorship_certi.jpeg';


export default class Training extends Component {
    render() {
        return (
            <div className='dark' style={{height:"550px"}}>
               
                <div className='training'>
                   
                    <div className='flex' style={{display:"flex",marginLeft:"11%"}}>
                        
                    <div className='zensar' >
                    <div style={{ display: "flex" }} className='heading'>
                        <div className='cert'><h2>TRAINING PROGRAM</h2></div>
                    </div>
                        <img src={c1} alt="Avatar" class="image" style={{ width: "80%" ,border:"solid #282828 40px"}} />
                    </div>
                    <div className='zensar'>
                    <div style={{ display: "flex" }} className='heading'>
                        <div className='cert'><h2>AUTHORSHIP</h2></div>
                    </div>
                        <img src={c2} alt="Avatar" class="image" style={{ width: "65%" ,border:"solid #282828 40px",marginTop:"-16px"}} />
                    </div>
                </div>
               
                </div>
            </div>
        )
    }
}
