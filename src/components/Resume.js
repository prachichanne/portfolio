// import React, { Component, useState } from 'react'
// // import Footer from './Footer'
// // import Header from './Header'
// import '../mycss.css';
// import { Document, Page, pdfjs } from 'react-pdf';

// // import c1 from '../img/prachi.jpeg';

// export default class Resume extends Component {


//     render() {

//         return (
//             <div>
//                      <ReactPDF></ReactPDF>
//             </div>
//         )
//     }
// }
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import samplepdf from '../data/PrachiChanne.pdf';
//import "react-pdf/dist/esm/Page/TextLayer.css";

function Resume() {



    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }





    return (
        <div>
            <section class="dark">
                <div style={{ textAlign: "center", marginLeft: "30%",paddingTop:"2%" }}>
                    <Document renderMode="canvas" file={samplepdf} onLoadSuccess={onDocumentLoadSuccess} >
                        {Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page renderAnnotationLayer={false} renderTextLayer={false} key={`page_${index + 1}`} pageNumber={index + 1} />
                            ),
                        )}
                        {/* <Page pageNumber={pageNumber} renderTextLayer={false} >

                </Page> */}
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Resume