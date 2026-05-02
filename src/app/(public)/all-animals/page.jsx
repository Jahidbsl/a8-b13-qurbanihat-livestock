
import ShortByAllAnimal from "@/components/ShortByAllAnimal";

import { getAllAnimalData } from "@/lib/data";

const AllAnimalsPage = async () => {
  const animalData = await getAllAnimalData();

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mt-10"> All Animals</h2>

      <ShortByAllAnimal animalData={animalData}></ShortByAllAnimal>
    </div>
  );
};

export default AllAnimalsPage;
