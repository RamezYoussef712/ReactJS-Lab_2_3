import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Lab_2_3</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add Student</Link>
        <Link to="/about">About</Link>
        <Link to="/error">Error</Link>
      </div>
    </nav>
  );
};

export default Navbar;
