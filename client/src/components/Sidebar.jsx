import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function Sidebar() {

  return (
    <>
      <div id="mySidebar" className="sidebar">
        <div className="sidebar1">
          <li>
            <Link className="link" to={"/"}>
            יהוה
            </Link>
          </li>
          <li>
            <Link className="link" to={"/uncleananimals"}>
             Thorah 
            </Link>
          </li>
          <li>
          <Link className="link" to={"/sacrifices"}>
          Sacrifices
          </Link>
          </li>
          <Link className="link" to={"/language"}>
          <li>
          language
          </li>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
