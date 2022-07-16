import './navigation.scss';
import { Link, NavLink  } from 'react-router-dom';

const Navigation = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      Type A Studios
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" className="nav-link" to="/">
        home
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="nav-link" to="/about">
        about
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="nav-link" to="/work">
        work
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="nav-link" to="/services">
        services
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="nav-link" to="/contact">
        contact
      </NavLink>
    </nav>
  </div>
)

export default Navigation;