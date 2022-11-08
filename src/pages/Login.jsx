import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handlesubmit = async (e) => {
    if (username === "foo" && password === "bar") {
      navigate("/home");
      localStorage.setItem("logged-in", "sucess");
    } else {
      alert("invalid credentials : username:foo, password: bar");
    }
  };
  return (
    <div className="container">
      <br />
      <div className="row m-2 ">
        <div className="col-md-6 offset-md-3 card shadow-md bg_img">
          <h4 className="text-center"><u>Welcome to Page!</u></h4>
          <form className="" onSubmit={handlesubmit}>
            <div className="row">
              <div className="col">
                <label className="form-label"><b>Username</b></label>
                <input
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="password" className="form-label"><b>Password</b></label>
                <input
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control"
                  type="password"
                />
              </div>
            </div>
            <div className="m-2">
              <button className="btn btn-primary" type="submit">Login              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
