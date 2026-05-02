import { qurbaniTips } from "@/lib/data";
import { Card } from "@heroui/react";
import { TiTick } from "react-icons/ti";

export function Tips() {
  return (
    <Card className="bg-(--secondary) p-10 shadow-lg hover:shadow-xl">
      <Card.Header>
        <Card.Title className="text-lg">Qurbani Tips</Card.Title>
        <Card.Description className="text-(--text)">
          Qurbani is an important religious practice, so choosing the right
          animal and handling everything properly
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <ul className="mt-2">
          {qurbaniTips.map((tip, i) => (
            <li key={i} className="text-(--text) text-sm flex items-center"><TiTick className=""/>{tip}</li>
          ))}
        </ul>
      </Card.Footer>
    </Card>
  );
}
