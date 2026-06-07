import BookRow from "./BookRow";

function BookList({ BooksData }) {
  return (
    <div className="space-y-5">
      {BooksData.map((items) => (
        <BookRow key={items.i} Books={items} />
      ))}
    </div>
  );
}

export default BookList;
