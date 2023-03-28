import React, { Component } from 'react'
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react'
import '../accor.css';

export default class About extends Component {
    render() {

        return (
            <div className='accordion'>
                <CAccordion>
                    <CAccordionItem className='CAccordionItem' itemKey={1}>
                        <CAccordionHeader className="my-accordion-header">Class 10 +</CAccordionHeader>
                        <CAccordionBody>
                           <p style={{fontSize:"25px"}}> 2017 Pass out <br />
                            Stella Maris School, Rajura <br />
                            CBSE <br/>
                            Percentage Scored  : 93.4</p>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem className='CAccordionItem1' itemKey={2}>
                        <CAccordionHeader className="my-accordion-header">Class 12 +</CAccordionHeader>
                        <CAccordionBody>
                        <p style={{fontSize:"25px"}}> 2019 Pass out <br />
                           Shri Shivaji Science College, Nagpur <br />
                           MSBSHSE  <br/>
                            Percentage Scored  : 79.4</p>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem className='CAccordionItem' itemKey={3}>
                        <CAccordionHeader className="my-accordion-header">B.Tech +</CAccordionHeader>
                        <CAccordionBody>
                        <p style={{fontSize:"25px"}}> Btech (pursuing)<br />
                           MIT Academy Of Engineering, Alandi <br/>
                           Department : Computer Science and Engineering <br />
                            Current CGPA  : 8.91 </p>
                        </CAccordionBody>
                    </CAccordionItem>

                </CAccordion>
            </div>
        )
    }
}
