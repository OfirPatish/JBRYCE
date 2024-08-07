import { OkPacket } from "mysql";
import dal_mysql from "../DAL/dal_mysql";

const getAllAuthors = async () => {
  return await dal_mysql.execute(`
    SELECT * FROM authors
    ORDER BY AuthorID DESC
  `);
};

const addAuthor = async (FirstName: string, LastName: string) => {
  try {
    const sqlInsert = `INSERT INTO authors (AuthorID, FirstName, LastName) VALUES (0, '${FirstName}', '${LastName}')`;
    const result: OkPacket = await dal_mysql.execute(sqlInsert);
    console.log(`Created author with id: ${result.insertId}`);
    return { id: result.insertId };
  } catch (err) {
    console.error("Error adding author:", err);
    throw err;
  }
};

const deleteAuthor = async (AuthorID: number) => {
  const sqlDeleteBooks = `DELETE FROM books WHERE AuthorID = ${AuthorID}`;
  const sqlDeleteAuthor = `DELETE FROM authors WHERE AuthorID = ${AuthorID}`;
  try {
    await dal_mysql.execute(sqlDeleteBooks);
    await dal_mysql.execute(sqlDeleteAuthor);
    console.log(`Deleted author with id: ${AuthorID}`);
  } catch (err) {
    console.error("Error deleting author:", err);
    throw err;
  }
};

export { getAllAuthors, addAuthor, deleteAuthor };
