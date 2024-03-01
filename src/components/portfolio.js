import "../components/portfolio.css";
import image1 from "../images/calculator-image.jpg";
import image2 from "../images/website-image.jpg";

function PortfolioPage() {
  return (
    <div className="portfolio">
      <div className="portfolio-header">Portfolio</div>
      <div className="portfolio-intro">Check my recent projects</div>
      <div className="container">
        <div className="row gx-5 py-5 justify-content-center">
          <div className="col col-lg-4 col-md-6 col-xs-12">
            <div className="portfolio-info">
              <a href="http://127.0.0.1:5500/index.html"><img className="cal-img" src={image1} alt="calculator image" /></a>
              <div className="git-link"><a href="https://github.com/Nneoma01/calculator-project.git">Github code</a></div>
            </div>
          </div>
          <div className="col  col-lg-4 col-md-6 col-xs-12">
            <div>
            <a href="http://127.0.0.1:5501/index.html"><img className="web-img" src={image2} alt="website image" /></a>
              <div  className="git-link"><a href="https://github.com/Nneoma01/agency-website-.git">Github code</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PortfolioPage;