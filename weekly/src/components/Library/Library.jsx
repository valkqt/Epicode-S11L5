import Container from "react-bootstrap/Container";
import HomeCard from "../Home/HomeCard/HomeCard";
import css from "./Library.module.css";

function Library() {
  const savedTracks = JSON.parse(localStorage.getItem("liked"))?.tracks ?? [];
  console.log(savedTracks);

  return (
    <Container as="main">
      <div className={css.libraryPage}>
        {savedTracks.map((elem) => {
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
      </div>{" "}
    </Container>
  );
}

export default Library;
