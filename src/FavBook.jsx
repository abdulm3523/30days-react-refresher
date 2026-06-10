import { Star } from "lucide-react";

function FavBook({ Books, onClickHandel }) {
  console.log(Books);

  return (
    <button
      onClick={() => onClickHandel(Books.id)}
      className={`${Books.isFav ? "bg-amber-500" : "bg-black"} w-14 h-14 rounded-xl text-white flex items-center justify-center text-xl hover:scale-105 hover:bg-amber-500 transition`}
    >
      <Star />
    </button>
  );
}

export default FavBook;
