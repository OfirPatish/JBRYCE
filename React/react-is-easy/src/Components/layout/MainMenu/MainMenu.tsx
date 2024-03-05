function MainMenu(): JSX.Element {
  const menuItems = [
    { id: 1, name: "Add One Switch" },
    { id: 2, name: "Add Double Switch" },
    { id: 3, name: "Add 3-Port Switch" },
    { id: 4, name: "Add 9-Port Switch" },
    { id: 5, name: "Add Control Panel" },
    { id: 6, name: "Add Sensor" },
    { id: 7, name: "Add Shutter" },
    { id: 8, name: "Import Data" },
    { id: 9, name: "Export Data" },
    { id: 10, name: "Send to Server" },
  ];

  return (
    <div className="MainMenu">
      <b>Main Menu</b>
      <hr />
      <div className="MainMenu-buttons">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button className="MainMenu-button">{item.name}</button>
            {(item.id === 7 || item.id === 9) && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;
