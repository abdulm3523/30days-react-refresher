function CarsCard({ carDetails }) {
  console.log("hello");
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <h2 className="text-4xl font-bold mb-6">{carDetails.name}</h2>

      <div className="space-y-3 text-2xl">
        <p>
          <span className="font-bold">Brand:</span> {carDetails.brand}
        </p>
        <p>
          <span className="font-bold">Year:</span> {carDetails.year}
        </p>
        <p>
          <span className="font-bold">Price:</span> ${carDetails.price}
        </p>
        <p>
          <span className="font-bold">Premium:</span>{" "}
          {carDetails.premium ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

export default CarsCard;
