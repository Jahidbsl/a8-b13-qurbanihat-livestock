const QurbaniTips = () => {
  const tips = [
    { 
      title: "Health Checkup", 
      desc: "Ensure the animal is active and check for any wounds or infections in the mouth or hooves." 
    },
    { 
      title: "Age Verification", 
      desc: "Ensure the cow is at least 2 years old and the goat/sheep is at least 1 year old." 
    },
    { 
      title: "Checking Teeth", 
      desc: "Check if there are at least two permanent incisor teeth at the front of the lower jaw." 
    },
    { 
      title: "Waste Disposal", 
      desc: "Remove sacrificial waste promptly and use bleach to keep the environment clean." 
    },
  ];

  return (
    <section className="py-16 bg-green-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-20 mt-5">Qurbani Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 flex flex-col items-center text-center w-full max-w-[300px] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default QurbaniTips