import CarsCard from "./CarsCard";
function CarsList({ carsList, searchTerm }) {
  const listOfCars = [];

  carsList.forEach((items) => {
    if (items.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    listOfCars.push(<CarsCard key={items.id} carDetails={items} />);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {listOfCars}
    </div>
  );
}

export default CarsList;
