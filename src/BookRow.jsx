import BookDetails from "./BookDetails";
import FavBook from "./FavBook";

function BookRow({ Books, onClickHandel }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex items-center justify-between">
      <BookDetails Details={Books} />
      <FavBook Books={Books} onClickHandel={onClickHandel} />
    </div>
  );
}

export default BookRow;
