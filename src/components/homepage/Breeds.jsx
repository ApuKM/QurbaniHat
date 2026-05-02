import { topBreeds } from "@/lib/data";
import { Card } from "@heroui/react";

export function Breeds() {
  return (
    <Card className="bg-(--secondary) p-10 shadow-lg hover:shadow-xl">
      <Card.Header>
        <Card.Title className="text-lg">Top Breeds</Card.Title>
        <Card.Description className="text-(--text)">
          Choosing the right breed helps you get better meat quality and value
          for money.
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <ul className="space-y-3">
          {topBreeds.map((breed, i) => {
            const { name, description } = breed;
            return (
              <li key={i} className="text-(--text)">
                <div className="">
                  <h2 className="text-base font-medium">{name}</h2>
                  <p className="text-sm text-(--text)">{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Card.Footer>
    </Card>
  );
}
