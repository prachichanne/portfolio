import React, { Component } from 'react'
import '../mycss.css';
import '../fade-in.css';
import '../myscss.scss';
import c1 from '../img/techsword.png';
import c2 from '../img/code.png';

import c3 from '../img/WorqHat.png';

export default class Internship extends Component {
  render() {
    return (
      <div>
        <section class="dark" style={{width:"100%"}}>
          <div class="container-in py-4">  <br /><br />
            <div className='main'>
              <article class="postcard dark blue">
                <a class="postcard__img_link" href="#">
                  <img class="postcard__img" src={c1} alt="Image Title" style={{height:"60%",paddingTop:"10%"}} />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title blue"><a href="#">Techsword Solutions</a></h1>
                  <div class="postcard__subtitle small">
                    12 June 2021 - 12 August 2021
                  </div>
                  <div class="postcard__preview-txt">
                    Create modules for generating barcodes in single as well as bulk, using Java packages and libraies.
                    Created databases and table structures for storing book details in MongoDB Compass.
                    Implemented RESTful APIs in Springboot, to allow user to upload excel sheet and download for the same in printable format.
                    Using Postman for API Testing.
                   
                  </div>
                  <ul class="postcard__tagbox">
                    <li class="tag__item"></li>
                    <li class="tag__item"></li>
                    <li class="tag__item"></li>
                  </ul>
                </div>
              </article>
              <article class="postcard dark red">
                <a class="postcard__img_link" href="#">
                  <img class="postcard__img" src={c2} alt="Image Title" style={{width:"50%",height:"50%",paddingTop:"10%"}} />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title red"><a href="#">Codekul Pvt Ltd</a></h1>
                  <div class="postcard__subtitle small">
                    12 June 2021 - 12 August 2021
                  </div>
                  <div class="postcard__preview-txt">
                    Design, develop and test Course Managment Website using ReactJS framework, HTML, Javascript, Bootstrap for front-end.
                    Creating React Components for Teacher, Student, Courses, Registration and Login.
                  API integration and testing.
                  </div>
                  <ul class="postcard__tagbox">
                    <li class="tag__item"></li>
                    <li class="tag__item"></li>
                    <li class="tag__item"></li>
                  </ul>
                </div>
              </article>
              <article  class="postcard dark green">
                <a class="postcard__img_link" href="#">
                  <img class="postcard__img" src={c3} alt="Image Title" style={{height:"40%",paddingTop:"10%"}} ></img>
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title red"><a href="#">Worqhat</a></h1>
                  <div class="postcard__subtitle small">
                    17 Jan 2023 - Present
                  </div>
                  <div class="postcard__preview-txt">
                    Implement and design functions and APIs to meet company requierements.
                    Working with technology like Redis, Firebase, Javascript and NodeJS.
                  Real time data sourcing and data integration.
                  </div>
                  <ul class="postcard__tagbox">
                    <li class="tag__item"></li>
                    <li class="tag__item"></li>
                    <li class="tag__item"></li>
                  </ul>
                </div>
              </article>
            </div>

          </div>

        </section>


      </div>
    )
  }
}
