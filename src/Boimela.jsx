import BookList from "./BooksList";
import Header from "./Header";
import Search from "./Search";

const booksData = [
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    isFav: false,
  },
  {
    name: "To Mockingbird",
    author: "Harper Lee",
    isFav: false,
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    isFav: false,
  },
  {
    name: "To Kill",
    author: "Harper Lee",
    isFav: false,
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    isFav: false,
  },
];

function Boimela() {
  return (
    <>
      <Header />
      <Search />
      <BookList BooksData={booksData} />
    </>
  );
}

export default Boimela;
