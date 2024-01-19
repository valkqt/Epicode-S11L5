import Container from "react-bootstrap/Container";
import css from "./Library.module.css";
import LibraryCard from "./LibraryCard/LibraryCard";
import { useDispatch } from "react-redux";

function Library() {
  const savedTracks = JSON.parse(localStorage.getItem("liked"))?.tracks ?? [];
  const dispatch = useDispatch();

  return (
    <Container as="main">
      <div className={css.libraryPage}>
        {savedTracks.map((elem) => {
          return (
            <LibraryCard
              onClickSelect={() => {
                dispatch({
                  type: "SET_SELECTED",
                  payload: elem,
                });
              }}
              key={elem.id}
              album={elem.album.title}
              artist={elem.artist.name}
              cover={elem.album.cover_xl}
              song={elem.title}
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
