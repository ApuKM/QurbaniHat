import AnimalCard from "@/components/homepage/AnimalCard";
import Banner from "@/components/homepage/Banner";
import { Breeds } from "@/components/homepage/Breeds";
import StatsSection from "@/components/homepage/Stats";
import { Tips } from "@/components/homepage/Tips";
import { animalData } from "@/lib/data";

export default async function Home() {
  const animals = await animalData();
  // console.log(animals)
  return (
    <div className="container mx-auto">
      <div id="main" className="">
        <Banner />
        <StatsSection />
        <div className="mt-10 md:mt-16">
          <h1 className="text-2xl text-(--text) font-bold mb-5">
            Featured Animals
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {animals.slice(0, 4).map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
        <div className=" mt-10 md:mt-16">
          <h1 className="text-2xl text-(--text) font-bold mb-5">Qurbani Tips & Top Breeds</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-(--secondary) p-6 rounded-lg">
            <Tips />
            <Breeds />
          </div>
        </div>
      </div>
    </div>
  );
}
