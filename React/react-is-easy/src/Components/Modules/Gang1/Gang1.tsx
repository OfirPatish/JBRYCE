import "./Gang1.css";

interface Gang1Props {
  nodeID: number;
  name: string;
  location: string;
  totalEPID: number;
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
      {[...Array(props.totalEPID)].map((index) => (
        <>
          <input key={index} type="text" />
          <br />
        </>
      ))}
      <input type="text"></input>
      <br />
      <input type="submit" value="send"></input>
    </div>
  );
}

export default Gang1;
