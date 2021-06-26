import ContactLabel from "./ContactLabel";
import { Envelope, Whatsapp, Linkedin, Github, Instagram } from 'react-bootstrap-icons';

function Contact() {
  return(
      <div id="contact">
        <div className="card card-body bg-danger text-white p-5">
          <h2>Get connected with me!</h2>
        </div>
        
        <div className="card card-body p-5">
          <div className="row">
            <ContactLabel 
              name="Email"
              icon={<Envelope size={16} />}
              value="mhmmdrezalif@gmail.com"
            />
            <ContactLabel 
              name="Whatsapp"
              icon={<Whatsapp size={16} />}
              value="+62 877-3685-4821"
            />
            <ContactLabel 
              name="LinkedIn"
              icon={<Linkedin size={16} />}
              value="Reza Firdaus"
            />
            <ContactLabel 
              name="Github"
              icon={<Github size={16} />}
              value="@firdausreza"
            />
            <ContactLabel 
              name="Instagram"
              icon={<Instagram size={16} />}
              value="@mhmmdrezalif"
            />
          </div>
        </div>
      </div>
  );
}

export default Contact;