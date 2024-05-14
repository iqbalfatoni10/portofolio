import { Outlet, Link } from 'react-router-dom';
import './sidebar.css';
import { useState } from 'react';

const SidebarComponent = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        <Link to="/" className="nav_logo">
          <h1>
            IQ<span>.</span>
          </h1>
        </Link>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <Link to="/" className="nav_link">
                  <i className="icon-home"></i>
                </Link>
              </li>
              <li className="nav_item">
                <Link to="/about" className="nav_link">
                  <i className="icon-user-following"></i>
                </Link>
              </li>
              <li className="nav_item">
                <Link to="/ability" className="nav_link">
                  <i className="icon-briefcase"></i>
                </Link>
              </li>
              <li className="nav_item">
                <Link to="/resume" className="nav_link">
                  <i className="icon-graduation"></i>
                </Link>
              </li>
              <li className="nav_item">
                <Link to="/porto" className="nav_link">
                  <i className="icon-layers"></i>
                </Link>
              </li>
              <li className="nav_item">
                <Link to="/contact" className="nav_link">
                  <i className="icon-bubble"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav_footer">
          <span className="copyright">&copy; 2023 - 2024.</span>
        </div>
        <Outlet />
      </aside>

      <div className={toggle ? 'nav_toggle nav_toggle-open' : 'nav_toggle'} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default SidebarComponent;
