import React, { Component } from 'react';
import '../myscss.scss';

import c1 from '../img/bookday.png';
import c2 from '../img/presentation_certi.jpeg';

import c3 from '../img/zensar.png';
import c4 from '../img/chess.png';

import c5 from '../img/quiz1.png';
import c6 from '../img/prakruti.png';

import c7 from '../img/ganesh.jpeg';
import c8 from '../img/books.jpeg';
import c9 from '../img/leaf.jpeg';

export default class Gallery extends Component {
    render() {
        return (
            <div class="dark">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" >
                        <img 
                            src={c1}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"/>

                        <img
                            src={c2}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"/>

                       <img
                            src={c7}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"/> 
                    </div>
                     
                   

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={c3}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"/>
                            
                        <img
                            src={c6}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"/>
 
                        <img
                            src={c8}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"/> 
               
                            
                    </div>


                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={c5}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"/>

                        <img
                            src={c6}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"/>
                        
                         <img
                            src={c9}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"/> 

                    </div>
                
                </div >
                </div>
        )
    }
}
