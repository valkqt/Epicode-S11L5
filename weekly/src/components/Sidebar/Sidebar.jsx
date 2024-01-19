import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import css from "./Sidebar.module.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  return (
    <div className={css.sidebar}>
      <nav className={css.sideNav}>
        <div className={css.logoWrapper}>
          <img className={css.logo} src={logo} alt="spotify logo" />
        </div>

        <ul className={css.navList}>
          <li>
            <Link className={css.link} to="/">
              <Icon.HouseFill size={28} className={css.icon} /> Home
            </Link>
          </li>
          <li>
            <Link className={css.link} to="/library">
              <Icon.BookFill size={28} className={css.icon} /> Library
            </Link>
          </li>
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search/${searchText}`, { replace: true });
          }}
        >
          <input
            className={css.searchInput}
            id="search"
            name="search"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className={css.submitButton} type="submit">
            GO
          </button>
        </form>
      </nav>
      <div className={css.userLogin}>
        <a
          href="#"
          className={`${css.link} ${css.userButton} ${css.registerButton}`}
          to="/register"
        >
          Sign up
        </a>
        <a
          className={`${css.link} ${css.userButton} ${css.loginButton}`}
          href="#"
        >
          Login
        </a>
        <div className={css.policyLinks}>
          <a href="#" className={css.link}>Cookie Policy</a><span> | </span>
          <a href="#" className={css.link}>Privacy</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
