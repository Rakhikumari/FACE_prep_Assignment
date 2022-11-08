import React, { useState, useEffect } from "react";
import Loaders from "../components/Loaders";

const Home = () => {
  const [data, setData] = useState([]);
  const [load, isLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [datafetch, setFetch] = useState(false);
  const [error, setError] = useState(false);
  const [add, setAdd] = useState([]);

  useEffect(() => {
    isLoad(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=100`)
      .then((res) => res.json())
      .then((data) => {
        setData((oldusr) => {
          return [...new Set([...oldusr, ...data.results.map((user) => user)])];
        });
        setAdd((oldusr) => {
          return [...new Set([...oldusr, ...data.results.map((user) => user)])];
        });
        setFetch(data.results.length > 0);
        isLoad(false);
      })
      .catch((err) => {
        setError(true);
        isLoad(false);
      });
  }, [page]);

  const watcher = React.useRef();

  const lastUserElementRef = React.useCallback(
    (node) => {
      if (load) return;
      if (watcher.current) watcher.current.disconnect();
      watcher.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && datafetch) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) watcher.current.observe(node);
    },
    [load, datafetch]
  );

  return (
    <div className="container">
      <h4 className="text-center">Contact-List</h4>
          {add.map((user, index) => {
            if (add.length === index + 1) {
              return (
                <div className="card text-center m-2">
                  <div className="card-body contactflow" key={user.email} ref={lastUserElementRef}>
                    <div className="card-header">
                      <h6>{user.name.first} {user.name.last}</h6>
                    </div>
                    <div className="row mt-1">
                      <div className="col">
                        <div className="">
                          <img src={user.picture.thumbnail} alt="user" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="text-start ">{user.email}</div>
                        <div className="text-start">{user.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>

              );
            } else {
              return (
                <div className="card text-center m-2">
                  <div className="card-body contactflow" key={user.email}>
                    <div className=" font_new">
                      <h6><b>{user.name.first} {user.name.last}</b></h6>
                    </div>
                    <div className="row mt-1">
                      <div className="col">
                        <div className="">
                          <img src={user.picture.thumbnail} alt="user" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="text-start">Email: {user.email}</div>
                        <div className="text-start">Mobile: {user.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        
      <div>{load && <Loaders />}</div>
      <div>{error && "Error"}</div>
    </div >
  );
};
export default Home;
