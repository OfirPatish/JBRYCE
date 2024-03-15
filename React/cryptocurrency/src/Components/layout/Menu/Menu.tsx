import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <div className="sticky">
        <h4>
          <NavLink to="/home" className="apiTitle">
            CRYPTO API 2.0
          </NavLink>
        </h4>
        <h3>Assets</h3>
        <p>
          <span className="get">GET</span>
          <NavLink to="/assets" className="docLink">
            /assets
          </NavLink>
        </p>
        <p>
          <span className="get">GET</span>
          <NavLink to="/assets/bitcoin" className="docLink">
            /assets/:id
          </NavLink>
        </p>
        <p>
          <span className="get">GET</span>
          <NavLink to="/assets/bitcoin/history" className="docLink">
            /assets/:id/history
          </NavLink>
        </p>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/assets/:id/markets</span>
        </p>
        <h3>Rates</h3>
        <p>
          <span className="get">GET</span>
          <NavLink to="/rates" className="docLink">
            /rates
          </NavLink>
        </p>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/rates/:id</span>
        </p>
        <h3>Exchanges</h3>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/exchanges</span>
        </p>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/exchanges/:id</span>
        </p>
        <h3>Markets</h3>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/markets</span>
        </p>
        <h3>Page404</h3>
        <p>
          <span className="get">404</span>
          <NavLink to="/page404" className="docLink">
            Error
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Menu;
