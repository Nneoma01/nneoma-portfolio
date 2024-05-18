import "../components/portfolio.css";
import image1 from "../images/calculator-image.jpg";
import image2 from "../images/website-image.jpg";

function PortfolioPage() {
  return (
    <div className="portfolio" id="projects">
      <div className="portfolio-header">Portfolio</div>
      <div className="portfolio-intro">Check my recent projects</div>
      <div className="port-container">
        <div className="row gx-3 gy-5 px-3 py-5 mx-auto justify-content-center">
          <div className="col-10 col-lg-4 col-md-6 col-xs-12 mb-3 d-flex justify-content-center">
            <div className="portfolio-info text-center">
              <a href="https://calculator-project-msbnlx6pb-nneoma-okagbues-projects.vercel.app/"><img className="cal-img img-fluid" src={image1} alt="calculator image" /></a>
              <div className="git-link"><a href="https://github.com/Nneoma01/calculator-project.git" className="link">Github code</a></div>
            </div>
          </div>
          <div className="col-10 col-lg-4 col-md-6 col-xs-12 mb-3 d-flex justify-content-center">
            <div className="portfolio-info text-center">
              <a href="http://nneoma01.github.io/agency-website-/"><img className="web-img img-fluid" src={image2} alt="website image" /></a>
              <div className="git-link"><a href="https://github.com/Nneoma01/agency-website-.git" className="link">Github code</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;