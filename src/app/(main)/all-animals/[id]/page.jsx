import { animalData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, Button } from "@heroui/react";
import {
  FaMapMarkerAlt,
  FaTag,
  FaWeightHanging,
  FaBirthdayCake,
  FaPaw,
  FaHeart,
} from "react-icons/fa";
import BookingForm from "@/components/homepage/BookingForm";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animals = await animalData();
  const animal = animals.find((item) => item.id === Number(id));

  if (!animal) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {/* Left side: image + main content */}
        <section className="col-span-12 xl:col-span-8">
          <Card className="overflow-hidden border border-neutral-200 shadow-sm">
            <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[560px]">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 66vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/90">
                  <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                    {animal.type}
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                    {animal.breed}
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                    {animal.category}
                  </span>
                </div>

                <h1 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  {animal.name}
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                  {animal.description}
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-neutral-200 p-5 shadow-sm">
              <Card className="border border-neutral-200 p-5 shadow-sm">
                <h2 className="text-lg font-semibold">Overview</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  This animal is listed with full details to help buyers compare
                  breed, weight, age, and price before making a decision.
                </p>
              </Card>
              <Card className="border border-neutral-200 p-5 shadow-sm">
                <h3 className="text-base font-semibold">Location</h3>
                <div className="mt-3 flex items-start gap-3 text-sm text-neutral-600">
                  <FaMapMarkerAlt className="mt-1 shrink-0" />
                  <p>{animal.location}</p>
                </div>
              </Card>
            </Card>

            <Card className="border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-base font-semibold">Details</h3>
              <div className="mt-4 space-y-3 text-sm">
                <Fact icon={<FaPaw />} label="Breed" value={animal.breed} />
                <Fact
                  icon={<FaTag />}
                  label="Category"
                  value={animal.category}
                />
                <Fact icon={<FaHeart />} label="Type" value={animal.type} />
                <Fact
                  icon={<FaWeightHanging />}
                  label="Weight"
                  value={`${animal.weight} KG`}
                />
                <Fact
                  icon={<FaBirthdayCake />}
                  label="Age"
                  value={`${animal.age} Years`}
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Right side */}
        <aside className="col-span-12 xl:col-span-4">
          <div className="space-y-6 xl:sticky xl:top-6">
            <Card className="border border-neutral-200 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Price</h2>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-(--primary)">
                  <FaHeart />
                  Available
                </span>
              </div>

              <div className="mt-4 text-3xl font-bold tracking-tight">
                {`${animal.price.toLocaleString("en-IN")} Taka`}
              </div>

              <div className="mt-6 grid gap-3">
                <Button className="w-full bg-(--accent) text-white">
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full">
                  Save to Wishlist
                </Button>
              </div>
            </Card>
            <BookingForm />
          </div>
        </aside>
      </div>
    </main>
  );
};

function Fact({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-neutral-200 px-3 py-2">
      <span className="mt-0.5 text-neutral-500">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          {label}
        </p>
        <p className="truncate font-medium text-neutral-900">{value}</p>
      </div>
    </div>
  );
}

export default AnimalDetailsPage;
