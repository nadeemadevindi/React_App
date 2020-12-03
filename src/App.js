import Axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("jYlIyJNi03tsAyGIGdtQZAB7KPPK6CGo");

  function handleSubmit(event) {
    event.preventDefault();

    Axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=" +
        apiKey +
        "&maxResults=40"
    ).then((data) => {
      console.log(data.data.results);
      setResult(data.data.results);
    });
  }
  return (
    <div class="container">
      <br></br>
      <h1>New York Times Best Selling Books List</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-info">
          Book List
        </button>
      </form>

      <table>
        {result.map((book) => (
          <tr>
            <td>{book.display_name}</td>
            <td>
              {" "}
              <button type="submit" className="btn btn-success">
                View Details
              </button>
            </td>
            <td>
              {" "}
              <a href="https://www.amazon.com/">
                <button type="submit" className="btn btn-danger">
                  Buy
                </button>
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
