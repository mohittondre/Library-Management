import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">📚 Book Library</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books/Fiction">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
