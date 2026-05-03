
import AnimalList from "@/components/homepage/AnimalList";
import { animalData } from "@/lib/data";
import React from "react";

const AllAnimalsPage = async () => {
  const animals = await animalData();

  return <AnimalList animals={animals} />;
};

export default AllAnimalsPage;
