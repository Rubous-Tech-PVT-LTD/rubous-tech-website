import React from "react";

const Trusted = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  ];

  return (
    <section className="bg-[#f3f6ff] py-12 overflow-hidden">
      <div className="max-w-297 2xl:max-w-360 mx-auto text-center px-6">
        
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-6">
          Trusted by modern businesses
        </p>

        <div className="overflow-hidden w-full">
          <div className="flex w-max animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-8"
              >
                <img
                  src={logo}
                  alt="brand"
                  className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trusted;