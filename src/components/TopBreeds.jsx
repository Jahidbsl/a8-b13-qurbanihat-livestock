import Image from "next/image";

const TopBreeds = () => {
  const breeds = [
    { name: "Brahman", origin: "High Meat Production", img: "https://landassociation.org/wp-content/uploads/2019/06/13Cattle-GC007-e1568553130381.jpg" },
    { name: "Sahiwal", origin: "Milky and Healthy", img: "https://media.istockphoto.com/id/1392264328/photo/a-close-up-shot-of-a-haryanvi-indian-cow-with-horns-and-a-white-patch-on-the-forehead.jpg?s=612x612&w=0&k=20&c=RHlrM0hONG9RbGXX2xzZf2SVgWq_J1qE2LnYEGXJP5A=" },
    { name: "Mirkadim", origin: "Traditional Choice", img: "https://munshigonj.wordpress.com/wp-content/uploads/2019/08/mirkadimcow.jpg?w=561&h=331" },
    { name: "Gir", origin: "Strong and Resilient", img: "https://img2.exportersindia.com/product_images/bc-small/2020/8/5105496/1597319885_p_5547743_1156757.jpeg" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Top Breeds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {breeds.map((breed, idx) => (
            <div key={idx} className="relative group w-full max-w-[280px] h-[380px] overflow-hidden rounded-[2rem] shadow-xl">
            
              <Image
                src={breed.img} 
                alt={breed.name} 
                height={300}
                width={300}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
             
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
            
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{breed.name}</h3>
                <p className="text-sm text-green-400 font-medium">{breed.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBreeds