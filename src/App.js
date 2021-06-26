import './main.css';
import fotoReza from './img/reza-cropped.jpg';
import { Instagram, Github, Linkedin, PersonCircle, BookHalf, CollectionFill, TelephoneFill } from 'react-bootstrap-icons';
import Home from "./components/Home";
import Resume from "./components/Resume";
import { Accordion } from 'react-bootstrap';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container accordion" id="accordion">
      <Accordion defaultActiveKey="0">
        <header id="main-header">
          <div className="row g-0">
            <div className="col-lg-4 col-md-5">
              <img className="foto" src={fotoReza} alt="" />
            </div>

            <div className="col-lg-8 col-md-7">
              <div className="d-flex flex-column">
                <div className="p-5 bg-dark text-white">
                  <div className="d-flex flex-column justify-content-start">
                    <h1 className="display-4">Mohammad Reza Ali F</h1>
                    <div className="social-media mt-3">
                      <a href="https://www.instagram.com/mhmmdrezalif/" className="text-white mr-4">
                        <Instagram size={32} />
                      </a>
                      <a href="https://github.com/firdausreza" className="text-white mr-4">
                        <Github size={32} />
                      </a>
                      <a href="https://www.linkedin.com/in/reza-firdaus-025603202/" className="text-white mr-4">
                        <Linkedin size={32} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-black">
                  Front End Web Developer (2+ Years) / Back End Web Developer (1+ Years) / Game Developer (Not my main interest, 1+ Years)
                </div>

                <div>
                  <div className="d-flex flex-row text-white align-items-stretch text-center">
                    <Accordion.Toggle eventKey="0" id="home-btn" className="port-item p-4 bg-primary">
                      <PersonCircle size={32} />
                      <span className="d-none d-sm-block">Personality</span>
                    </Accordion.Toggle>
                    <Accordion.Toggle eventKey="1" id="edu-btn" className="port-item p-4 bg-success" data-bs-toggle="collapse" href="#education" role="button" aria-expanded="false" aria-controls="#education">
                      <BookHalf size={32} />
                      <span className="d-none d-sm-block">Education</span>
                    </Accordion.Toggle>
                    <Accordion.Toggle eventKey="2" id="work-btn" className="port-item p-4 bg-warning" data-bs-toggle="collapse" href="#work" role="button" aria-expanded="false" aria-controls="#work">
                      <CollectionFill size={32} />
                      <span className="d-none d-sm-block">My Works</span>
                    </Accordion.Toggle>
                    <Accordion.Toggle eventKey="3" id="contact-btn" className="port-item p-4 bg-danger" data-bs-toggle="collapse" href="#contact" role="button" aria-expanded="false" aria-controls="#contact">
                      <TelephoneFill size={32} />
                      <span className="d-none d-sm-block">Contact</span>
                    </Accordion.Toggle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="content">
          <Accordion.Collapse eventKey="0">
            <Home />
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="1">
            <Resume />
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="2">
            <Work />
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="3">
            <Contact />
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Footer />
    </div>
  );
}

export default App;
