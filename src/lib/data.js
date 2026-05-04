export const animalData = async() => {
    const res = await fetch("http://localhost:3000/data.json")
    return await res.json();
}

// export const getAnimalById = async(id) => {
//   const res = await fetch(`http://localhost:3000/data.json/${id}`)
//   return await res.json();
// }

export const qurbaniTips = [
  "Select a healthy and active animal",
  "Ensure it meets Islamic requirements",
  "Buy from trusted sellers",
  "Maintain proper hygiene during slaughter",
];

export const topBreeds = [
  {
    name: "Deshi",
    description: "Naturally raised, strong immunity, better taste",
  },
  {
    name: "Friesian",
    description: "Large size, high-quality meat",
  },
];