export interface Book {
  BookID: number;
  AuthorID: number;
  Title: string;
  PageCount: number;
  Price: number;
  FirstName: string;
  LastName: string;
}

export interface Author {
  AuthorID: number;
  FirstName: string;
  LastName: string;
}
