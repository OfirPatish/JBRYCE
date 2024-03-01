import "./Gang1.css";

interface Gang1Props {
  nodeID: number;
  name: string;
  location: string;
}

function Gang1(props: Gang1Props): JSX.Element {
  return (
    <div className="Gang1 Box">
      nodeID:{props.nodeID}
      <br />
      name:{props.name}
      <br />
      location: {props.location}
      <hr />
      <input type="text"></input>
      <input type="submit" value="send"></input>
    </div>
  );
}

export default Gang1;
