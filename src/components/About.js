import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "../components/About.css";
import { FaArrowRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <Container>
      <div className="about">
        <div className="about-header">About me</div>
        <div className="about-info">Hi there, I’m a web developer based in Lagos, Nigeria. I enjoy building beautiful, 
            functional web apps and websites. My mission is to work and collaborate with tech agencies within and outside
             Nigeria and globally create high peformance ,interactive websites that work across all platforms. I am a team worker and
            adaptable to challenging situations. I'm seeking new oppurtuinities in fromt-end
            development. I'm open to work remotely and  have flexible working hours. I have 
            practical knowledge and usage of <br/><span className='skill'>HTML, CSS, Bootstrap, JavaScript and React</span>
        </div>
        <div className="button">
          <Button variant="light"> View Resume <FaArrowRight /></Button>
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;