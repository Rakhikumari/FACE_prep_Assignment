import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handlelogout = () => {
    localStorage.setItem("logged-in", "failure");
    navigate("/");
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1">Infinite Scrolling SDE Task</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div className="d-flex">
              {localStorage.getItem("logged-in") === "sucess" && (
                <button onClick={handlelogout} className="btn btn-outline-danger">
                  Logout
                </button>
              )}
            </div>

          </div>
        </div>
      </nav>


      {/* <img
        src="https://www.faceprep.in/statics/media/logo_web.47d10a50.svg"
        alt=""
      /> */}

    </div>
  );
};

export default Navbar;
