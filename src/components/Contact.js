import "../components/Contact.css";
// import Button from 'react-bootstrap/Button';

function ContactPage() {
    // const myMail = "favourokagbue20@gmail.com";
    
    // // Function to create the mailto link
    // const createMailtoLink = () => {
    //   const subject = "Dev reaachout"; // Change this to your desired subject
      
    //   const body = Name: ${form.name}%OD Email: ${form.email} %OD Message: ${form.message};
  
    //   const mailto:${(myMail)}?subject=${(subject)}&body=${(body)};
    // };
  
  //   return (
  //     <div id="contact">
  //       <div className='contact-header head'>Contact</div>
  //       <div className="contact-intro">Get in touch with me</div>
  //       <form className="contact-info">
  //         <input id="name" className="form" type="text" placeholder="Enter your name" />
  //         <input id="email" className="form" type="email" placeholder="Enter your email" />
  //         <textarea id="message" className="form" rows="7" cols="10" placeholder="Enter your message..."></textarea>
  //       </form>
  //       <div className="contact-btn">
  //         <a href={createMailtoLink()}>
  //           <Button variant="primary">Let's talk</Button>
  //         </a>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div id="Contact">
      <div className='contact-header head'>Contact</div>
      <div className="contact-intro">Get in touch with me</div>
      <form action="https://formspree.io/f/mbjnwrgd" method="POST" className="contact-info">
        <input className="form" name="Name" type="text" placeholder="Enter your name" required />
        <input className="form" name="Email" type="email" placeholder="Enter your email" required/>
        <textarea className="form" name="Message" rows="7" cols="10" placeholder="Enter your message..." required></textarea>
        <div className="contact-btn">
          <button type="submit" className="buttons">Let's talk</button>
      </div>
      </form>
    </div>
  );
}

export default ContactPage;