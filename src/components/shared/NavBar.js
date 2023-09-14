import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="nav-bar">
      <section className="nav-content">
        <div className="brand">
          <div className="navbar-link flex-start">
            <Link to="/" className="brand-link">
              RxRoster
            </Link>
          </div>
        </div>
        <div className="links">
          <div className="navbar-link">
            <Link to="/" className="navbar-link-content">
              About
            </Link>
          </div>
          {user && (
            <div className="navbar-link">
              <Link to="/all-medications" className="navbar-link-content">
                All Medications
              </Link>
            </div>
          )}
          {!user && location.pathname === "/signup" && (
            <div className="navbar-link">
              <Link to="/login" className="navbar-link-content">
                Log In
              </Link>
            </div>
          )}
          {!user && location.pathname === "/login" && (
            <div className="navbar-link">
              <Link to="/signup" className="navbar-link-content">
                Get Started
              </Link>
            </div>
          )}
          {user && (
            <button onClick={handleClick} className="mx-2">
              <div className="-mt-1">Logout</div>
            </button>
          )}
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
