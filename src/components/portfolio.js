import "../components/portfolio.css";
import image1 from "../images/calculator-image.jpg";
import image2 from "../images/website-image.jpg";

function PortfolioPage() {
  return (
    <div className="portfolio">
      <div className="portfolio-header">Portfolio</div>
      <div className="portfolio-intro">Check out my recent work</div>
      <div className="porfolio-info">
        <div>
          <img className="cal-img" src={image1} alt="calculator image" />
        </div>
        <div>
          <img className="web-img" src={image2} alt="website image" />
        </div>
      </div>
    </div>
  )
};   

export default PortfolioPage;