"use client";

import React, { useMemo, useState } from "react";
import { Sort } from "./Sorting";
import AnimalCard from "./AnimalCard";

const AnimalList = ({ animals }) => {
  const [sortType, setSortType] = useState("");
  const sortedAnimals = useMemo(() => {
    if (!sortType) return animals;
    const sorted = [...animals];

    if (sortType === "ascending") {
      return sorted.sort((a, b) => a.price - b.price);
    }
    if (sortType === "descending") {
      return sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [animals, sortType]);
  return (
    <div className="mt-10 md:mt-16 container mx-auto px-2">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Animals</h1>

        <Sort sortType={sortType} setSortType={setSortType} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
