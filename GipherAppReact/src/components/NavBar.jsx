import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import axios from "axios"; // node
export default function NavBar({ modechange, darkMode, getSearchData }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSearchForm = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://gipher-app.onrender.com/gifs/search?q=${search}`
    );
    navigate(`/search/${search}`);
    getSearchData(response.data, search);
    //getSearchData(search,search);
    setSearch("");
  };

  return (
    <div data-bs-theme={darkMode ? "dark" : ""}>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid ">
          <a className="navbar-brand " href="/">
            Gipher
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookmark">
                  Bookmarks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favourites">
                  Favourites
                </Link>
              </li>
            </ul>
            <h3 className="darmode-Icon" onClick={modechange}>
              {darkMode ? <span>☀️</span> : <span>🌙</span>}
            </h3>
            &nbsp;
            <form className="d-flex" role="search" onSubmit={handleSearchForm}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleSearch}
                required
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
