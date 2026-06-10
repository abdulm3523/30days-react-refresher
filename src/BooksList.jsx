import BookRow from "./BookRow";

function BookList({ BooksData, setBooks, searchTerm }) {
  const row = [];

  const handelFavClick = (id) => {
    const updatedBooks = BooksData.map((item) =>
      item.id === id ? { ...item, isFav: !item.isFav } : item,
    );

    setBooks(updatedBooks);
  };

  BooksData.forEach((books) => {
    if (books.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    row.push(
      <BookRow key={books.id} Books={books} onClickHandel={handelFavClick} />,
    );
  });

  return <div className="space-y-5">{row}</div>;
}

export default BookList;
