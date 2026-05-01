
import AnimalCard from "@/components/homepage/AnimalCard";
import Banner from "@/components/homepage/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { animalData } from "@/lib/data";


export default async function Home() {
  const animals = await animalData();
  // console.log(animals)
  return (
    <div className="container mx-auto">
      <Navbar />
      <div id="main" className="">
        <Banner />
        <div>
          <h1 className="text-2xl text-(--text) font-bold mb-5">Featured Animals</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {
              animals.slice(0,4).map((animal) => (
                <AnimalCard key={animal.id} animal={animal}/>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
