import React, { useState, useEffect } from "react";
import auth from "../helper/auth-helper";
import { Outlet } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { verifyToken } from "../helper/api-auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  const [user, setUser] = useState("");
  const [query, setQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    // event.preventDefault();
    // const searchUrl = `/admin/search?q=${query}`;
    // // const searchUrl = `/admin/editorsq=${query}`;
    // setQuery("");
    // navigate(searchUrl);
  }

  const handleSignOut = () => {
    auth.clearJWT(() => {
      navigate("/issues/login");
    });
  };


  useEffect(() => {
    const jwt = auth.isAuthenticated();
    if (!jwt) {
      navigate("/issues/login");
    } else {
      verifyToken(jwt).then((data) => {
        if (data.error) {
          auth.clearJWT(() => {
            navigate("/");
          });
        } else {
          setIsLoggedIn(true);
          setUser(jwt.user);
        }
      });
    }
  }, []);

  return (
    <>
      {isLoggedIn && (
        <div>
          <div className="z-10 fixed top-0 w-full flex h-14 bg-blue-500 items-center justify-between shadow-md">
            <div className="m-3 text-xl text-slate-100 ">
              <Link className="text-slate-100 hover:text-red-500" to="/issues">
                Home
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center">
                <div className="relative sm:w-60 lg:w-96">
                  <input
                    onChange={handleChange}
                    placeholder="Search..."
                    type="text"
                    value={query}
                    className="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <FontAwesomeIcon icon={faSearch} className="search-icon text-white text-lg" />
                  </button>
                </div>
              </div>
            </form>
            <div className="flex gap-2 text-xl">
              <div className="m-3 text-slate-100">User: {user} </div>
              <div className="m-3 text-slate-100 hover:text-red-500">
                <button onClick={handleSignOut}>Logout</button>
              </div>
            </div>
          </div>
          <div className="p-6 pt-14 text-base">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

