import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container">
          <Link to={"/"} className="navbar-brand fw-bold">
            Muhammad Arya
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav w-100 d-flex justify-content-end gap-lg-5">
              <Link to={'/'} className="nav-link" aria-current="page">
                Home
              </Link>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
              <Link to={"/project"} className="nav-link">
                Project
              </Link>
              <Link to={"/blogs"} className="nav-link">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
