import { useState } from "react";
import CarsList from "./CarsList";
import Header from "./Header";
import SearchContainer from "./SearchContainer";
const carsData = [
  {
    id: 1,
    name: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    premium: true,
  },
  {
    id: 2,
    name: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    premium: false,
  },
  {
    id: 3,
    name: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    premium: true,
  },
  {
    id: 4,
    name: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    premium: false,
  },
  {
    id: 5,
    name: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    premium: true,
  },
];

function CarsContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [cars, setCars] = useState(carsData);

  // handel premium filter
  const handelIsPremium = (eventValue) => {
    setIsPremium(eventValue);
    const premiumCars = carsData.filter((items) => true === items.premium);

    if (eventValue) {
      setCars(premiumCars);
    } else {
      setCars(carsData);
    }
  };

  return (
    <>
      <Header />
      <SearchContainer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handelIsPremium={handelIsPremium}
        isPremium={isPremium}
        setIsPremium={setIsPremium}
      />
      <CarsList carsList={cars} isPremium={isPremium} searchTerm={searchTerm} />
    </>
  );
}

export default CarsContainer;
