import "./Footer.css";

function Footer(): JSX.Element {
  return <div className="Footer">All rights reserved &copy; {new Date().getFullYear()}</div>;
}

export default Footer;
