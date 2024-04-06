import "../components/portfolio.css";
import image1 from "../images/calculator-image.jpg";
import image2 from "../images/website-image.jpg";

function PortfolioPage() {
  return (
    <div className="portfolio" id="projects">
      <div className="portfolio-header">Portfolio</div>
      <div className="portfolio-intro">Check my recent projects</div>
      <div className="container">
        <div className="row gx-0=5 gy-5 px-5 py-5 justify-content-center">
          <div className="col mx-5 col-lg-4 col-md-6 col-xs-12">
            <div className="portfolio-info">
              <a href="http://Nneoma01.github.io/calculator-project/" ><img className="cal-img" src={image1} alt="calculator image" /></a>
              <div className="git-link"><a href="https://github.com/Nneoma01/calculator-project.git" className="link">Github code</a></div>
            </div>
          </div >
          <div className="col mx-5 col-lg-4 col-md-6 col-xs-12">
            <div >
            <a href="http://nneoma01.github.io/agency-website-/"><img className="web-img" src={image2} alt="website image" /></a>
              <div  className="git-link"><a href="https://github.com/Nneoma01/agency-website-.git" className="link">Github code</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PortfolioPage;