import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./Album.module.css";
import { useDispatch, useSelector } from "react-redux";

function Album({ onSelect }) {
  const params = useParams();
  const [results, setResults] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${params.albumId}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8b36f7f0e4msh713a7788113b5dfp1c91f9jsna6e735e2137f",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  }, []);

  return (
    <Container className="d-flex align-items-start">
      {results && (
        <div className={css.albumPage}>
          <div>
            <div className={css.imgContainer}>
              <img className="img-fluid" src={results.cover_xl} />
            </div>
            <div className={css.albumShowcase}>
              <h4>{results.artist.name}</h4>
              <p>{results.title}</p>
              <button
                className={css.playButton}
                onClick={() => {
                  dispatch({
                    type: "SET_SELECTED",
                    payload: results.tracks.data[0],
                  });
                }}
              >
                Play
              </button>
            </div>
          </div>
          <ul className={css.trackList}>
            {results.tracks.data.map((elem) => {
              return (
                <li
                  key={elem.id}
                  className={css.listItem}
                  onClick={() => {
                    dispatch({
                      type: "SET_SELECTED",
                      payload: elem,
                    });
                  }}
                >
                  {elem.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Container>
  );
}

export default Album;
