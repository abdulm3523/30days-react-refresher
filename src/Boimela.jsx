import { useState } from "react";
import BookList from "./BooksList";
import Header from "./Header";
import Search from "./Search";
const booksData = [
  {
    id: crypto.randomUUID(),
    name: "The Alchemist",
    author: "Paulo Coelho",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Atomic Habits",
    author: "James Clear",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "The Psychology of Money",
    author: "Morgan Housel",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Think and Grow Rich",
    author: "Napoleon Hill",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Deep Work",
    author: "Cal Newport",
    isFav: false,
  },
  {
    id: crypto.randomUUID(),
    name: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    isFav: false,
  },
];

function Boimela() {
  const [books, setBooks] = useState(booksData);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookList BooksData={books} searchTerm={searchTerm} setBooks={setBooks} />
    </>
  );
}

export default Boimela;
