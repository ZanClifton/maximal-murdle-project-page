import Logo from "./Logo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <Logo />
        </Link>
      </header>
    </div>
  );
};
