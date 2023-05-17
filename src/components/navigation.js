import { Outlet, NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navigation = () => (
  <>
    <header>
      <div className="logo">
        <img src={logo} className="logoImg" alt="Space travel hub logo" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <nav>
        <ul className="navList">
          <li>
            <NavLink className="navItem rocket" to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink className="navItem" to="Missions">Missions</NavLink>
          </li>
          <div className="bar" />
          <li>
            <NavLink className="navItem" to="Profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Navigation;
