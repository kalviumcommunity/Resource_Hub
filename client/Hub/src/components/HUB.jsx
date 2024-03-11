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
      await axios.delete(`https://resource-hub-1.onrender.com/delete${id}`);
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
                  {/* <a href={book.Links} className="read-more">
                    Link
                    <span className="sr-only">{`about ${book.Resources}`}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a> */}
                    {/* Separate Link for updating */}
                    {/* <Link className="update" to={`/Update/${book._id}`}> */}
                      <button className="update" onClick={()=>handleUpdateClick(book._id)}>Update</button>
                    {/* </Link>  */}
                  </div>
                  <div>
                    <button className="delete" onClick={handleDelete}>Delete</button>
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
