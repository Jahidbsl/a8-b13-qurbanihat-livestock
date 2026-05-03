import { promises as fs } from 'fs';
import path from 'path';

export const getAllAnimalData = async (id) => {
 
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const allAnimals = JSON.parse(fileContents);

  if (id) {
    return allAnimals.find(a => String(a.id) === String(id)) || null;
  }
  return allAnimals;
};