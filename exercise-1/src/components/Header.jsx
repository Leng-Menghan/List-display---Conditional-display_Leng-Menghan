import logo from "../assets/pn-logo.png";
export default function Header(props) {
    return (
        <header id="header">
            <img src={logo} alt="PN Logo" />
            <h1>Students results for {props.name}</h1>
        </header>
    );
}