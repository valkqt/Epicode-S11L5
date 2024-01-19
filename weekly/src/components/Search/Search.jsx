import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeCard from "../Home/HomeCard/HomeCard.jsx";
import css from "./Search.module.css";
import Container from "react-bootstrap/esm/Container.js";

function Search() {
  const [results, setResults] = useState(null);
  const params = useParams();
  console.log(results);

  useEffect(() => {
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${params.searched}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8b36f7f0e4msh713a7788113b5dfp1c91f9jsna6e735e2137f",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  }, []);

  return (
    <Container>
      <div className={css.resultsWrapper}>
        {results &&
          results.data.map((elem) => {
            return (
              <HomeCard
                key={elem.id}
                album={elem.album.title}
                artist={elem.artist.name}
                cover={elem.album.cover_xl}
                id={elem.id}
                albumId={elem.album.id}
              />
            );
          })}
      </div>
    </Container>
  );
}

export default Search;
