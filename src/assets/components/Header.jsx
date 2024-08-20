import Logo from "./Logo";
import User from "./User";

function Header(props) {
  return (
    <header>
      <div className="container">
        <Logo />
        <User userName={props.userName} />
      </div>
    </header>
  );
}
export default Header;
