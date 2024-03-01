import "./Gang2.css";

interface Gang2Props {
  nodeID: number;
  name: string;
  location: string;
  epID: number;
}

function Gang2(props: Gang2Props): JSX.Element {
  return (
    <div className="Gang2 Box">
      nodeID: {props.nodeID}
      <br />
      name: {props.name}
      <br />
      location: {props.location}
      <br />
      epID: {props.epID}
      <hr />
      <input type="text"></input>
      <input type="submit" value="send"></input>
    </div>
  );
}

export default Gang2;
