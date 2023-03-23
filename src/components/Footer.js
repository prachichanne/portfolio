import React, { Component } from 'react'

import '../mycss.css';



export default class Footer extends Component {
  render() {
    return (
      <div id='media' className='footer'>
        <section id="lab_social_icon_footer">
            <div style={{marginBottom:"%"}}class="container">
              <div class="text-center center-block" >
                <a style={{padding:"5px"}} href="mailto:#"><i id="social-em" class="fa fa-envelope fa-3x social"></i></a>
                <a style={{padding:"5px"}}  href="#"><i id="social-em" class="fa fa-instagram fa-3x social"></i></a>
                <a style={{padding:"5px"}} href="#"><i id="social-em" class="fa fa-github fa-3x social"></i></a>
                <a style={{padding:"5px"}} href="#"><i id="social-em" class="fa fa-linkedin fa-3x social"></i></a>

              </div>
            </div>
        </section>
      </div>
    )
  }
}
