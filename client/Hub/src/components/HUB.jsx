import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function HUB() {
  const [hub, setHub] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://resource-hub-1.onrender.com/info");
        setHub(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    const loginStatus = sessionStorage.getItem("login");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleUpdateClick = (id) => {
    navigate(`/Update/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://resource-hub-1.onrender.com/delete/${id}`);
      const response = await axios.get("https://resource-hub-1.onrender.com/info");
      setHub(response.data);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("login");
    setIsLoggedIn(false);
  };

  return (
    <div className="main-container">
      <div className="header">
        <h2>Resource Hub</h2>
        <input placeholder="🔍 Enter the book name" list="suggestions" className="search-bar" />
        {!isLoggedIn ? (
          <>
            <Link to="/signup">
              <button className="Add">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="Add">Login</button>
            </Link>
          </>
        ) : (
          <>
            <button className="Add" onClick={handleLogout}>Logout</button>
            <Link to="/add">
              <button className="Add">Add</button>
            </Link>
          </>
        )}
      </div>
      
      <div className="List-books">
        {hub.map((book) => (
          <section className="articles" key={book._id}>
            <article>
              <div className="article-wrapper">
                <figure>
                  <img src={book.Img} alt={book.Resources} />
                </figure>
                <div className="article-body">
                  <h2>{book.Resources}</h2>
                  <p>{book.Description}</p>
                  {isLoggedIn && (
                    <div>
                      <button className="update" onClick={() => handleUpdateClick(book._id)}>Update</button>
                      <button className="delete" onClick={() => handleDelete(book._id)}>Delete</button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </section>
        ))}
      </div>
    </div>
  );
}

export default HUB;