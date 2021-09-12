
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';


function PDFViewer() {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  return (
    <div
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '99.5vh',
        }}
    >
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                padding: '1px',
                // position: 'absolute',
                // zIndex: 1,
            }}
        >
            <Toolbar />
        </div>
        <div
            style={{
                display: 'flex',
                // position: 'absolute',
                
                overflow: 'scroll'
            }}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer
              fileUrl="http://localhost:3000/test2-pdf.pdf"
              defaultScale={1.0}
              plugins={[toolbarPluginInstance]} />
          </Worker>
        </div>
    </div>

    // <div
    //   style={{ display: 'flex',
    //             position: 'absolute',
    //             maxHeight: '100vh',
    //             overflow: 'scroll'}}
    // >
    //   <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
    //     <Toolbar />
    //     <Viewer
    //       fileUrl="http://localhost:3000/test2-pdf.pdf"
    //       defaultScale={1.0}
    //       plugins={[toolbarPluginInstance]}
    //     />
    //   </Worker>
    // </div>

  )

}

// function Metadata() {

//   return (
//     <Paper>
//       <h1>Paper title</h1>
//       <li>doi</li>
      
//     </Paper>
//   )


// }


// function PDF() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
 
//   //@ts-ignore
//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   }
 
//   return (
//     <div>
//       <Document
//         file="/test2-pdf.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>Page {pageNumber} of {numPages}</p>
//     </div>
//   );
// }