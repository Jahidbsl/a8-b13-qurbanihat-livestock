"use client";
import React, { useEffect, useState } from "react";
import { ListBox, Select } from "@heroui/react";
import Image from "next/image";
import { Calendar, MapPin, Tag, Weight } from "lucide-react";
import Link from "next/link";
import Lottie from "lottie-react";
import yearOx from "@/assets/Year of the Ox.json";

const ShortByAllAnimal = ({ animalData }) => {
  
  const [products, setProducts] = useState(animalData || []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (animalData) {
      setProducts(animalData);
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [animalData]);

  const handleShort = (type) => {
    let shortData = [...products];
    if (type === "lowToHigh") {
      shortData.sort((a, b) => a.price - b.price);
    } else if (type === "highToLow") {
      shortData.sort((a, b) => b.price - a.price);
    }
    setProducts(shortData);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-48 h-48">
          <Lottie animationData={yearOx} loop={true} />
        </div>
        <p className="text-emerald-600 font-bold animate-pulse tracking-widest uppercase text-sm">
          Preparing Livestock...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">
     
      <div className="flex justify-end mb-8 mr-10">
        <Select className="w-[256px]" placeholder="Sort By Price">
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Popover>
            <ListBox >
              <ListBox.Item key="lowToHigh" textValue="lowToHigh" onClick={()=>handleShort("lowToHigh")}>
                Price: Low to High
              </ListBox.Item>
              <ListBox.Item key="highToLow" textValue="highToLow" onClick={()=>handleShort("highToLow")}>
                Price: High to Low
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {products.map((item) => {
         
          const { id, name, image, status, price, breed, type, description, weight, age, location } = item;
          
          return (
            <div
              key={id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 max-w-[350px]"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image} 
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${
                    status === "Available" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  }`}>
                    {status}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
                  <p className="text-green-700 font-bold text-lg">
                    $ {price?.toLocaleString()}
                  </p>
                </div>
              </div>

             
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600">
                      {name}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Tag size={14} /> {breed}
                    </p>
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-md font-bold uppercase">
                    {type}
                  </span>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {description}
                </p>

                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-50 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Weight size={18} className="text-green-500" />
                    <span className="text-sm font-medium">{weight} kg</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} className="text-green-500" />
                    <span className="text-sm font-medium">{age} months</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin size={16} className="text-red-400" />
                    <span>{location}</span>
                  </div>
                  <Link href={`/all-animals/${id}`}>
                    <button className="bg-gray-900 hover:bg-green-600 text-white p-3 px-5 rounded-xl transition-all duration-300">
                      View Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShortByAllAnimal;