import PremiumFilter from "./PremiumFilter";
import SearchBox from "./SearchBox";
function SearchContainer({
  searchTerm,
  setSearchTerm,
  isPremium,
  handelIsPremium,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5 mb-8">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <PremiumFilter handelIsPremium={handelIsPremium} isPremium={isPremium} />
    </div>
  );
}

export default SearchContainer;
