import './layout.scss';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Logo from '../../assets/type-a-studios-logo-main.png';

const Layout = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="page">
        <Outlet />
      </div>
      <footer>
        <div className="footer-left">
          <img className="logo" src={Logo} />
          <h2>Let's work <span>together</span>.</h2>
        </div>
        <div class="footer-right">
          <h5>contact</h5>
          <p>(310) 622- 9200</p>
          <p>contact@typeastudios.com</p>
          <h5>location</h5>
          <p>12011 San Vicente Boulevard, Suite B7<br />Los Angeles, CA 90049</p>
        </div>
        <p className="copyright">© Type A Studios 2022 | <span>website design & code by julie park</span></p>
      </footer>
    </div>
  ) 
}

export default Layout;