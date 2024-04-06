import "../components/Contact.css";
import Button from 'react-bootstrap/Button';

function ContactPage() {
  var inputs = document.querySelectorAll(".form");
  function changeTextColour(event) {
    event.target.style.color = "white";
  }
  inputs.forEach(input => {
    input.addEventListener("input", changeTextColour)
  });

  return (
    <div id="contact">
      <div className='contact-header head'>Contact</div>
      <div className="contact-intro">Get in touch with me</div>
      <form action="https://formspree.io/f/{form_id}" method="post" className="contact-info">
        <input className="form" type="text" placeholder="Enter your name" />
        <input className="form" type="email" placeholder="Enter your email" />
        <textarea className="form" rows="7" cols="10" placeholder="Enter your message..."></textarea>
      </form>
      <div className="contact-btn">
        <Button variant="primary">Let's talk</Button>
      </div>
    </div>
  );
}

export default ContactPage;