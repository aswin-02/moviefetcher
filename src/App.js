import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import chevron from "./pic/chevron-double-down.svg";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=f222b42fecf0bf011b6e0223a0f0244b";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [demo, setDemo] = useState("Trending Now");

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    setDemo("");
    document.getElementById("chev").style.display = "none";
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const Home = () => {
    window.location.reload();
  };

  return (
    <div className="container text-center">
      <nav>
        <button className="logo-button" onClick={Home}>
          <h1>MOVIE FETCHER</h1>
        </button>
        <br></br>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="white"
          class="bi bi-stars"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
        </svg>
      </nav>
      <form
        onSubmit={searchMovie}
        style={{ display: "inline-flex", marginTop: "20%" }}
      >
        <input
          className="input-box"
          name="query"
          value={query}
          onChange={changeHandler}
          placeholder="Enter a movie name"
          autoComplete="off"
        ></input>
        <input className="input-button" type="submit" value="Search"></input>
      </form>
      <div>
        <br></br>
        <br></br>

        <h1>{demo}</h1>
        <img id="chev" src={chevron}></img>
        <div className="text-right">
          <button
            className="to-top-button"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="white"
              class="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </button>
        </div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <Movie key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>Bruh !.. Enter a movie name to search </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
