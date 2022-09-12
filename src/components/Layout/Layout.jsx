import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="layoutWrap">
        <div className="layout">
          <Link className="linkLayout" to="/home">
            Home
          </Link>
          <Link className="linkLayout" to="/about">
            About
          </Link>
          <Link className="linkLayout" to="/contacts">
            Contacts
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
