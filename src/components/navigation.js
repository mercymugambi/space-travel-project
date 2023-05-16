// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <header>
      <div className="logo">
        <img src="" alt="Space travel hub logo" />
      </div>
      <nav>
        <ul className="navList">
          <li>
            <Link className="navItem" to="Rockets">Rockets</Link>
          </li>
          <li className="navItem">
            <Link className="navItem" to="Missions">Missions</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Navigation;
