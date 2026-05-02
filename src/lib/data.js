// lib/data.js
export const getAllAnimalData = async (id) => {
  try {
   
    const response = await fetch('http://localhost:3000/data.json', {
        cache: 'no-store' 
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const allAnimals = await response.json();

   
    if (id) {
      const animal = allAnimals.find(animal => animal.id === Number(id));
      return animal || null; 
    }

   
    return allAnimals;
    
  } catch (error) {
    console.error("Fetch error:", error);
    return id ? null : []; 
  }
};