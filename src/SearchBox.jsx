function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search cars..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full md:w-[500px] h-14 px-4 rounded-lg border border-gray-300 bg-white text-lg focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}

export default SearchBox;
