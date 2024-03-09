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
          <span className="get">GET</span> /assets
        </p>
        <p>
          <span className="get">GET</span> /assets/:id
        </p>
        <p>
          <span className="get">GET</span> /assets/:id/history
        </p>
        <p>
          <span className="get">GET</span> /assets/:id/markets
        </p>
        <h3>Rates</h3>
        <p>
          <span className="get">GET</span> /rates
        </p>
        <p>
          <span className="get">GET</span> /rates/:id
        </p>
        <h3>Exchanges</h3>
        <p>
          <span className="get">GET</span> /exchanges
        </p>
        <p>
          <span className="get">GET</span> /exchanges/:id
        </p>
        <h3>Markets</h3>
        <p>
          <span className="get">GET</span> /markets
        </p>
      </div>
    </div>
  );
}

export default Menu;
