import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Nav />
      </header>
    </div>
  );
};
