import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <h1>API Documentation</h1>
      <h2>Assets</h2>
      <p>GET /assets</p>
      <p>GET /assets/:id</p>
      <p>GET /assets/:id/history</p>
      <p>GET /assets/:id/markets</p>
      <h2>Rates</h2>
      <p>GET /rates</p>
      <p>GET /rates/:id</p>
      <h2>Exchanges</h2>
      <p>GET /exchanges</p>
      <p>GET /exchanges/:id</p>
      <h2>Markets</h2>
      <p>GET /markets</p>
    </div>
  );
}

export default Menu;
