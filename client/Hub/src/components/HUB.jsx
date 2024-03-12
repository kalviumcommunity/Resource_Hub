import { useEffect, useState } from "react";
import "../App.css";
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function HUB() {
  const [hub, setHub] = useState([]);
  const navigate = useNavigate();

  const handleUpdateClick = (id) => {
    // console.log("wribgg")
    navigate(`/Update/${id}`)

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://resource-hub-1.onrender.com/info");
        // console.log(response.data)
        setHub(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://resource-hub-1.onrender.com/delete/${id}`);
      const response = await axios.get(
        "https://resource-hub-1.onrender.com/info"
      );
      setHub(response.data);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="header">
        <h2>Resource </h2><h2 className="logo-name">Hub</h2>

        <input
          placeholder="🔍 Enter the book name"
          list="suggestions"
          className="search-bar"
        />
        <Link className="Add" to="/add">
          <button>Add</button>
        </Link>
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
                  <div>
                   
                    {/* <Link className="update" to={`/Update/${book._id}`}> */}
                      <button className="update" onClick={()=>handleUpdateClick(book._id)}>Update</button>
                    {/* </Link>  */}
                  </div>
                  <div>
                    <button className="delete" onClick={() => handleDelete(book._id)}>Delete</button>
                  </div>

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
