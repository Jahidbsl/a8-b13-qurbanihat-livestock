import { getAllAnimalData } from "@/lib/data";
import FeatureCard from "./FeatureCard";


const FeaturesSection = async () => {
  const fetureAnimals = await getAllAnimalData();
  

 

const activeFetures = fetureAnimals?.filter(feature => 
    feature.status.toLowerCase() === "feature"
  );

  if (!activeFetures || activeFetures.length === 0) {
    return <div className="text-red-500 p-10 text-center">No Featured Data Found</div>;
  }

  return (
   <div className="py-10">
  <h2 className="text-3xl font-bold text-center mb-8">Feature Animals</h2>
  
  <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
    {activeFetures.map((feature) => (
      <FeatureCard key={feature.id} feature={feature} />
    ))}
  </div>
</div>
   
  );
};
export default FeaturesSection;