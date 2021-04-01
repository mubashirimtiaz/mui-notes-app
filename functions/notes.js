const fs = require("fs");
const path = require("path");

const getPath = () => path.join(process.cwd(), "data", "db.json");
const readFile = (file) => fs.readFileSync(file, { encoding: "utf-8" });

exports.handler = (event, context) => {
  const fileName = getPath();
  const notes = JSON.parse(readFile(fileName));
  if (event.httpMethod === "POST") {
    const note = JSON.parse(event.body);
    if (note) {
      notes.push({ ...note, id: new Date().toISOString() });
      fs.writeFileSync(fileName, JSON.stringify(notes));
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: 200,
          message: "Note Successfully Added",
        }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify("BAD REQUEST"),
      };
    }
  } else {
    const {
      queryStringParameters: { id },
    } = event;
    if (id) {
      const filterNotes = notes.filter(
        (note) => note.id.toString() !== id.toString()
      );
      fs.writeFileSync(fileName, JSON.stringify(filterNotes));
      return {
        statusCode: 200,
        body: JSON.stringify(filterNotes),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify(notes),
      };
    }
  }
};
