import image from '../images/about-image.jpg';
import "../components/Home.css";

const HomePage = () => {
  return (
    <div className="about-profile" id="home">
      <div className="about-info">
        <p className='tag-line'>Hi, I'm Nneoma Okagbue</p>
        <span>Front-End Web Developer</span>
      </div>
      <div className='about-img'>
        <img className="dev-img" src={image} alt="developer avatar" />
      </div>
    </div>

  );
}

export default HomePage;