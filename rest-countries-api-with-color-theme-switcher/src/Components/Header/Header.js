import "./Header.css";

const Header = ({ changeMode, darkMode }) => {
  return (
    <header className="title">
      <div className="container">
        <h1>Where in the world?</h1>
        <div onClick={() => changeMode()}>
          <i className="fas fa-moon"></i>
          {darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
