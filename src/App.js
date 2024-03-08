import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import SideBar from './components/sidebar';
import HomePage from './components/Home';
import AboutPage from './components/About';
import PortfolioPage from './components/portfolio';
import ContactPage from './components/Contact';



function App() {
  return (
    <div className="App-body">
      <NavBar />
      <SideBar />
      <HomePage />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </div>
  );
}

export default App;
