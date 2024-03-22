import "../components/Contact.css";
import Button from 'react-bootstrap/Button';

function ContactPage() {
  return (
    <div id="contact">
      <div className='contact-header head'>Contact</div>
      <div className="contact-intro">Get in touch with me</div>
      <div className="contact-info">
        <input className="form-one" type="text" placeholder="Enter your name" />
        <input className="form-two" type="email" placeholder="Enter your email" />
        <textarea className="form-three" rows="7" cols="10" placeholder="Enter your message..."></textarea>
      </div>
      <div className="contact-btn">
        <Button variant="primary">Let's talk</Button>
      </div>
    </div>
  );
}

export default ContactPage;