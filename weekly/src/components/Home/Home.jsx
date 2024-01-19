import { useEffect, useState } from "react";
import css from "./Home.module.css";
import HomeCard from "./HomeCard/HomeCard.jsx";
import Container from "react-bootstrap/Container";
import data from "../../data/default.json";

function Home() {
  const [results, setResults] = useState(null);

  // eseguire fetching dello storage nel parent e passare le informazioni tramite state lifting
  // const storage = localStorage.getItem('liked')

  return (
    <Container as="main" className={css.mainPage}>
      <h2>Rock</h2>
      <div className={css.genreBox}>
        {data.rock.map((elem) => {
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

      <h2>Metal</h2>
      <div className={css.genreBox}>
        {data.metal.map((elem) => {
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

      <h2>Pop</h2>
      <div className={css.genreBox}>
        {data.pop.map((elem) => {
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

export default Home;
