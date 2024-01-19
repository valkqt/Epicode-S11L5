import css from "./LibraryCard.module.css";

function LibraryCard(props) {
  return (
    <div className={css.libraryCard} onClick={props.onClickSelect}>
      <div className={css.imgContainer}>
        <img className="img-fluid"src={props.cover} />
      </div>
      <div>
        <h3>{props.song}</h3>
        <h4>{props.artist}</h4>
        <p>{props.album}</p>
      </div>
    </div>
  );
}

export default LibraryCard;
