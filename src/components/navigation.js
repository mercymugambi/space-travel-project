import { Outlet, Link } from 'react-router-dom';
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
            <Link className="navItem rocket" to="Rockets">Rockets</Link>
          </li>
          <li className="navItem">
            <Link className="navItem" to="Missions">Missions</Link>
          </li>
          <div className="bar" />
          <li className="navItem">
            <Link className="navItem" to="Profile">My Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Navigation;
