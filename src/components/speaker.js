import React, { useState } from 'react'
import { Modal, Button} from 'react-bootstrap'
import Layout from '../components/layout'



const Speaker = () => {

  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <p>
            {modalBody}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const toggle = (title, body) => {
    
      setModalTitle(title);
      setModalShow(!modalShow);
      setModalBody(body);
    
  };
  
return (
<Layout>
<div className="anchor-section css-1p582fi" id="speakers">
   <div>
      <div className="SectionLayout  css-jvua9h">
         <div className="css-1hs171s">
            <div className="css-8atqhb">
               <div className="css-1hs171s">
                  <div className="SpeakersParagraph css-dqywu5">
                     <h3 className="Heading-tag
                        SpeakersParagraph-title css-1nspgyx">Featured Speakers</h3>
                     <div className="Speakers-wrapper">
         
                        <div aria-label="modal" onClick={() => toggle("Julia Louis-Dreyfus", "Actress, Producer and Activist") } role="button" tabindex="0" className="Modal-trigger Speaker css-0">
                           <div className="Speaker-image css-1l20iue">
                              <div className="Speaker-overlay"></div>
                              <div className="css-170g9gq gatsby-image-wrapper">
                                  <img alt="speaker" aria-hidden="true" src="https://www.okta.com/oktane21/static/a79f4c4aed6e38599629f832028840c5/4fe8c/Trevor-Noah_Oktane21-Keynote.jpg" />
                                 
                           </div>
                           </div>
                           <div className="Speaker-bio css-1w7jmmo">
                              <p className="Speaker-name css-1eq6gzc">Julia Louis-Dreyfus</p>
                              <p className="Speaker-info">Actress, Producer and Activist</p>
                           </div>
                        </div>
                        <div aria-label="modal"  onClick={() => toggle("Simone Biles", "World’s Most Decorated Gymnast") } role="button" tabindex="0" className="Modal-trigger Speaker css-0">
                           <div className="Speaker-image css-1l20iue">
                              <div className="Speaker-overlay" ></div>
                              <div className="css-170g9gq gatsby-image-wrapper" style={{position: "relative", overflow:"hidden" }}>
                                   <img alt="speaker"  aria-hidden="true" src="https://www.okta.com/oktane21/static/cde36af318d322bdafbe3e563a75ad8a/14b42/jld-headshot3.jpg"/>
                               
                              </div>
                           </div>
                           <div className="Speaker-bio css-1w7jmmo">
                              <p className="Speaker-name css-1eq6gzc">Simone Biles</p>
                              <p className="Speaker-info">World’s Most Decorated Gymnast</p>
                           </div>
                        </div>
                        <div aria-label="modal"  onClick={() => toggle("Julia Louis-Dreyfus", "Actress, Producer and Activist") }  role="button" tabindex="0" className="Modal-trigger Speaker css-0">
                        <div className="Speaker-image css-1l20iue">
                           <div className="Speaker-overlay"></div>
                           <div className="css-170g9gq gatsby-image-wrapper" style={{position: "relative", overflow:"hidden" }}>
                               <img alt="speaker"  aria-hidden="true" src="https://www.okta.com/oktane21/static/f03e06b8fd244bfad3a64eec69aa1418/2244e/Simone%2520Headshot%2520by%2520Megan%2520Schoenberg.jpg"/>
                            
                           </div>
                        </div>
                        <div className="Speaker-bio css-1w7jmmo">
                           <p className="Speaker-name css-1eq6gzc">Julia Louis-Dreyfus</p>
                           <p className="Speaker-info">Actress, Producer and Activist</p>
                        </div>
                     </div>
                     
                       
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <MyVerticallyCenteredModal
        show={modalShow}
        modalTitle={modalTitle}
        modelBody={modalBody}
        onHide={() => setModalShow(false)}

      />  
  </Layout>
)
   
}
  
  export default Speaker;
  