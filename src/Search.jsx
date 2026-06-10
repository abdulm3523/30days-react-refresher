function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search books..."
        className="w-full h-14 px-5 rounded-xl border border-gray-300 bg-white text-lg outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}
export default Search;
