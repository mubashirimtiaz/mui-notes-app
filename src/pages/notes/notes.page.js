import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Card from "../../components/card/Card.component";
import Masonry from "react-masonry-css";
import styles from "./notes.module.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://cool-json-server.herokuapp.com/notes/")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const deleteNote = (id) => {
    fetch("https://cool-json-server.herokuapp.com/" + id, {
      method: "DELETE",
    }).then(() => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    });
  };
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
  console.log(styles);
  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {notes.map((note) => (
          <div key={note.id}>
            <Card
              title={note.title}
              detail={note.detail}
              type={note.category}
              id={note.id}
              deleteNote={deleteNote}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
