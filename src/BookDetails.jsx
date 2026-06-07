function BookDetails({ Details }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-black">{Details.name}</h2>
      <p className="text-gray-500 text-xl mt-1">{Details.author}</p>
    </div>
  );
}

export default BookDetails;
