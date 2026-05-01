import AllAnimalCard from "@/components/all-animal/AllAnimalCard";
import { getAllAnimalData } from "@/lib/data";
import {Description, Label, ListBox, Select} from "@heroui/react";
import React from "react";

const AllAnimalsPage = async () => {
  const animalData = await getAllAnimalData();

  return (
    <div className="container mx-auto">
    <div className="flex justify-between items-center my-6">
            <h2 className="text-3xl font-bold"> All Animals</h2>
          
   <div>
     <Select className="w-[256px]" placeholder="Short By">
      
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="florida" textValue="Florida">
            Price: Low to High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="delaware" textValue="Delaware">
            Price: High to Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
        
         
      
         
        </ListBox>
      </Select.Popover>
      
    </Select>
   </div>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6 md:p-10 justify-items-center">
        {animalData.map((animal) => (
          <AllAnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;
