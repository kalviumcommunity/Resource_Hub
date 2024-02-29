// Importing necessary dependencies from React and other libraries
import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img from '../assets/logo.png';

// React functional component for displaying a list of books
function Books() {
  // State variables to manage book data, search input, filtered books, and suggestion visibility
  const [bookData, setBookData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(true);

// Handler function to update search input and filter books based on user input
  function handleInputChange(event) {
    const userInput = event.target.value;
    setSearchText(userInput);
    setShowSuggestions(userInput !== '');

// Filtering books based on the user input (case-insensitive)
    const filtered = bookData.filter(
      item => item.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredBooks(filtered);
  }
// useEffect hook to fetch book data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching book data from the specified API
        const response = await axios.get(
          'https://reactnd-books-api.udacity.com/books',
          { headers: { Authorization: 'whatever-you-want' } }
        );
        // Setting both original and filtered book data in the state
        setBookData(response.data.books);
        setFilteredBooks(response.data.books);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    // Calling the fetchData function when the component mounts (empty dependency array)
    fetchData();
  }, []);

  // Rendering the component structure
  return (
    <div className="main-cointainer">
      <div className="header">
        {/* Logo image */}
        {/* <img className='logo-img' src={img} alt="" /> */}
        <h2> Resource Hub </h2>
        {/* Search input with dynamic suggestions */}
        <input
          type="text"
          placeholder=" 🔍 Enter the book name"
          list="suggestions"
          onChange={handleInputChange}
          value={searchText}  
          className="search-bar"
        />
        {/* Link to navigate to the registration form */}
        <Link to="/form">
          <button className="Register">Login 🔖</button>
        </Link>
      </div>
      {/* Displaying the list of books */}
      <div className="List-books">
        {filteredBooks.map(book => (
          <section class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/1011/800/450" alt="" />
              </figure>
              <div class="article-body">
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <a href="#" class="read-more">
                  Read more <span class="sr-only">about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
        
            <div class="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/1005/800/450" alt="" />
              </figure>
              <div class="article-body">
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <a href="#" class="read-more">
                  Read more <span class="sr-only">about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
        
            <div class="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/103/800/450" alt="" />
              </figure>
              <div class="article-body">
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <a href="#" class="read-more">
                  Read more <span class="sr-only">about this is some title</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
        ))}
      </div>
    </div>
  );
}

// Exporting the Books component as the default export
export default Books;
