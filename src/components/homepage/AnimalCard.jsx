import { Separator } from "@heroui/react";
import { Button } from "@heroui/react";
import { Chip } from "@heroui/react";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiWeight } from "react-icons/gi";
import { ImPriceTags } from "react-icons/im";

const AnimalCard = ({ animal }) => {
  const { id, name, price, weight, location, image, breed } = animal;
  return (
    <Card className="border rounded-xl hover:shadow-lg transiton-all bg-(--secondary)/50">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={name}
          className="object-cover rounded-xl transition-transform duration-300 hover:scale-108"
        />

        <Chip
          size="sm"
          className="absolute right-0 top-0 bg-(--primary) text-white"
        >
          {breed}
        </Chip>
      </div>

      <div>
        <h2 className="font-semibold text-lg text-(--text)">{name}</h2>
      </div>

      <div className="flex items-center gap-5 text-(--text)">
        <div className="flex items-center gap-1">
          <p>
            <ImPriceTags />
          </p>
          <p>{price.toLocaleString("en-IN")}</p>
        </div>

        <div className="flex items-center gap-1">
          <p>
            <GiWeight />
          </p>
          <p>{weight}</p>
        </div>
        <div className="flex items-center gap-1">
          <p>
            <CiLocationOn />
          </p>
          <p>{location}</p>
        </div>
      </div>
      <Separator orientation="horizontal" />

      <Link href={`/all-animals/${id}`}>
        {" "}
        <Button className={"w-full bg-(--accent) text-white"}>
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default AnimalCard;
