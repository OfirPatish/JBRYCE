import { SyntheticEvent, useEffect, useState } from "react";
import "./Login.css";

function Login(): JSX.Element {
  //let ourTime = new Date().toLocaleTimeString();
  const [ourTime, setOurTime] = useState(new Date().toLocaleTimeString());
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const updateUserName = (e: SyntheticEvent) => {
    let value = (e.target as HTMLInputElement).value;
    setUserName(value);
    console.log(`updateUserName: ${value}`);
  };
  const updateUserPass = (e: SyntheticEvent) => {
    let value = (e.target as HTMLInputElement).value;
    setUserPass(value);
    console.log(`updateUserPass: ${value}`);
  };
  const showCred = () => {
    console.log(`User: ${userName}, Pass: ${userPass}`);
  };

  useEffect(() => {
    console.log("interval was created");
    setInterval(() => {
      setOurTime(new Date().toLocaleTimeString());
    }, 800);
  }, []);

  return (
    <div className="Login Box">
      <h2>Login Form</h2>
      <input type="text" placeholder="Username" onChange={updateUserName} />
      <br />
      <input type="password" placeholder="Password" onChange={updateUserPass} />
      <br />
      <input type="button" value="Login" onClick={showCred} />
      <br />
      <hr />
      Hello {userName}!
      <hr />
      {ourTime}
    </div>
  );
}

export default Login;
