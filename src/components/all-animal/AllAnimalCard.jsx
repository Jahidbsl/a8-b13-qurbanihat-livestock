import React from "react";

import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Tag, Weight } from "lucide-react";
import Link from "next/link";

const AllAnimalCard = ({ animal }) => {
  const {
    name,
    type,
    breed,
    price,
    weight,
    age,
    location,
    description,
    image,
    status,
  } = animal;

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 max-w-[350px]">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
              status === "Available"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {status}
          </span>
        </div>
        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
          <p className="text-green-700 font-bold text-lg">
            $ {price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
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

        {/* Info Grid */}
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

        {/* Location & Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin size={16} className="text-red-400" />
            <span>{location}</span>
          </div>
          <Link href="#">
            <button className="bg-gray-900 hover:bg-green-600 text-white p-3 rounded-xl transition-all duration-300 group/btn">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllAnimalCard;
