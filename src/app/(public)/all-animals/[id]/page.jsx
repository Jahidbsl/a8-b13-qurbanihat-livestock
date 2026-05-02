import { getAllAnimalData } from "@/lib/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Tag,
  Weight,
  DollarSign,
  PawPrint,
} from "lucide-react";



const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  const animal = await getAllAnimalData(id);



  if (!animal || animal.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Animal details not found!
        </h2>
        <p className="text-gray-500 mb-6">
          The animal you are looking for might have been removed.
        </p>
        <Link
          href="/all-animals"
          className="bg-green-600 text-white px-6 py-2 rounded-xl flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back to all animals
        </Link>
      </div>
    );
  }

  const {
    name,
    image,
    status,
    price,
    breed,
    type,
    description,
    weight,
    age,
    location,
  } = animal;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/all-animals"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors mb-6 group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="font-medium">Back to All Animals</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative group">
          <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={image || "/placeholder.jpg"}
              alt={name || "Animal Image"}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6">
              <span
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-md ${
                  status === "Available"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider text-sm mb-2">
              <PawPrint size={18} />
              <span>{type || "Unknown Type"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {name || "Unnamed Animal"}
            </h1>
            <div className="flex items-center gap-2 text-2xl font-bold text-green-700">
              <DollarSign size={24} />
              <span>
                {price ? price.toLocaleString() : "Contact for Price"}
              </span>
            </div>
          </div>

          <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
            {description || "No description available for this animal."}
          </div>

          <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm text-green-600">
                <Tag size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Breed
                </p>
                <p className="font-semibold text-gray-800">{breed || "N/A"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm text-green-600">
                <Weight size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Weight
                </p>
                <p className="font-semibold text-gray-800">
                  {weight ? `${weight} kg` : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm text-green-600">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Age</p>
                <p className="font-semibold text-gray-800">
                  {age ? `${age} Months` : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm text-green-600">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Location
                </p>
                <p className="font-semibold text-gray-800">
                  {location || "Not Specified"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button
              disabled={status !== "Available"}
              className={`flex-1 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg ${
                status === "Available"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              {status === "Available" ? "Booking" : "Already Booked"}
            </button>
            <button className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all active:scale-95 shadow-lg">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimalDetails;
