import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="items">
        <span>moj.user@gmail.com</span>
        <button className="action">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
