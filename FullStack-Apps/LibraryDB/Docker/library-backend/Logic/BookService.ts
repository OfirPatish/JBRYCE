import dal_mysql from "../DAL/dal_mysql";
import { OkPacket } from "mysql";

const getAllBooks = async () => {
  return await dal_mysql.execute(`
    SELECT books.*, authors.FirstName, authors.LastName, authors.AuthorID
    FROM books
    INNER JOIN authors ON books.AuthorID = authors.AuthorID
    ORDER BY books.BookID DESC
  `);
};

const addBook = async (AuthorID: number, Title: string, PageCount: number, Price: number) => {
  try {
    if (await bookExists(AuthorID, Title)) {
      throw new Error("Book already exists");
    }
    const sqlInsert = `INSERT INTO books (BookID, AuthorID, Title, PageCount, Price) VALUES (0, ${AuthorID}, '${Title}', ${PageCount}, ${Price})`;
    const result: OkPacket = await dal_mysql.execute(sqlInsert);
    console.log(`Created book with id: ${result.insertId}`);
    return { id: result.insertId };
  } catch (err) {
    console.error("Error adding book:", err);
    throw err;
  }
};

const bookExists = async (AuthorID: number, Title: string) => {
  const sqlCheck = `SELECT * FROM books WHERE AuthorID = ${AuthorID} AND Title = '${Title}'`;
  const existingBooks = await dal_mysql.execute(sqlCheck);
  return existingBooks.length > 0;
};

const deleteBook = async (BookID: number) => {
  try {
    const sqlDelete = `DELETE FROM books WHERE BookID = ${BookID}`;
    await dal_mysql.execute(sqlDelete);
    console.log(`Deleted book with id: ${BookID}`);
  } catch (err) {
    console.error("Error deleting book:", err);
    throw err;
  }
};

export { getAllBooks, addBook, deleteBook };
