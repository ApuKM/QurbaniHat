import AnimalCard from "@/components/homepage/AnimalCard";
import { animalData } from "@/lib/data";
import React from "react";

const AllAnimalsPage = async() => {
    const animals = await animalData();
  return (
    <div className="mt-10 md:mt-16 container mx-auto">
      <h1 className="text-2xl text-(--text) font-bold mb-5">
        All Animals
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;
