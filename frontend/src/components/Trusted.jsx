import React from "react";

const Trusted = () => {
  const logos = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/55.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ];

  return (
    <section className="bg-[#f3f6ff] py-12">
      <div className="max-w-6xl mx-auto text-center px-6">
        
        {/* Heading */}
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-6">
          Trusted by modern businesses
        </p>

        {/* Logos */}
        <div className="flex justify-center items-center gap-17 flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-md overflow-hidden grayscale hover:grayscale-0 transition duration-300"
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trusted;