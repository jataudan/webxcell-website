import Image from "next/image";
import React from "react";

const PortfolioCards = () => {
  const portfolioData = [
    { id: 1, title: "Generation Of Wealth", category: "Marketing" },
    { id: 2, title: "Creative Solutions", category: "Design" },
    { id: 3, title: "Innovative Ideas", category: "Development" },
    { id: 4, title: "Growth Strategies", category: "Business" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:mb-[130px]">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row w-full gap-[20px] justify-center items-center">
        {/* Large Box */}
        <div className="w-full flex flex-col justify-end md:max-w-[500px] h-[707px] bg-[#C4C4C4] hover:bg-custom-gradient rounded-[20px] p-6 shadow-lg text-white group cursor-pointer">
          <div className="flex w-full justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <h3 className="text-lg font-semibold">Generation Of Wealth</h3>
              <p className="text-sm">Marketing</p>
            </div>
            <button>
              <Image
                src="/assets/portfolio/arrow.png"
                alt="shape"
                width={60}
                height={60}
              />
            </button>
          </div>
        </div>

        {/* Small Boxes */}
        <div className="w-full flex flex-col gap-[20px] justify-center items-center md:max-w-[502px]">
          {portfolioData.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="w-full md:max-w-[570px] h-[343px] bg-[#C4C4C4] rounded-[20px] p-6 text-white group relative overflow-hidden cursor-pointer"
            >
              {/* Overlay with hover effect */}
              <div className="flex w-full justify-between items-end absolute inset-0 bg-custom-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] p-6">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
                <button>
                  <Image
                    src="/assets/portfolio/arrow.png"
                    alt="shape"
                    width={60}
                    height={60}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row w-full gap-[20px] justify-center items-center mt-[20px]">
        {/* Small Boxes */}
        <div className="w-full flex flex-col gap-[20px] justify-center items-center md:max-w-[502px]">
          {portfolioData.slice(2).map((item) => (
            <div
              key={item.id}
              className="w-full md:max-w-[570px] h-[343px] bg-[#C4C4C4] rounded-[20px] p-6 text-white group relative overflow-hidden cursor-pointer"
            >
              {/* Overlay with hover effect */}
              <div className="flex w-full justify-between items-end absolute inset-0 bg-custom-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] p-6">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
                <button>
                  <Image
                    src="/assets/portfolio/arrow.png"
                    alt="shape"
                    width={60}
                    height={60}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Large Box */}
        <div className="w-full flex flex-col justify-end md:max-w-[500px] h-[707px] bg-[#C4C4C4] hover:bg-custom-gradient rounded-[20px] p-6 shadow-lg text-white group transition-colors duration-300 cursor-pointer">
          <div className="flex w-full justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <h3 className="text-lg font-semibold">Generation Of Wealth</h3>
              <p className="text-sm">Marketing</p>
            </div>
            <button>
              <Image
                src="/assets/portfolio/arrow.png"
                alt="shape"
                width={60}
                height={60}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;
