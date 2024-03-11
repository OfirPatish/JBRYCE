import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <div className="sticky">
        <h4>
          <span id="apiTitle">CRYPTO API 2.0</span>
        </h4>
        <h3>Assets</h3>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/assets</span>
        </p>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/assets/:id</span>
        </p>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/assets/:id/history</span>
        </p>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/assets/:id/markets</span>
        </p>
        <h3>Rates</h3>
        <p>
          <span className="get">GET</span>
          <span className="docLink">/rates</span>
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
      </div>
    </div>
  );
}

export default Menu;
