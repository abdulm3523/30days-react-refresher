import BookDetails from "./BookDetails";
import FavBook from "./FavBook";

function BookRow({ Books }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex items-center justify-between">
      <BookDetails Details={Books} />
      <FavBook isFav={Books.isFav} />
    </div>
  );
}

export default BookRow;
