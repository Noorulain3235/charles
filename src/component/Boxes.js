import React from 'react';

export default function CategoryBoxes() {
  const categories = [
    {
      image: `${process.env.PUBLIC_URL}/images/1.png`,
      title: "Consumer Insights",
      description: "The east side to a deluxe apartment in move on up to the east side",
      bg: "bg-white"
    },
    {
      image: `${process.env.PUBLIC_URL}/images/2.png`,
      title: "Emerging Ideas",
      description: "The east side to a deluxe apartment in move on up to the east side",
      bg: "bg-[#f2f4f7]"
    },
    {
      image: `${process.env.PUBLIC_URL}/images/3.png`,
      title: "Thought Leadership",
      description: "The east side to a deluxe apartment in move on up to the east side",
      bg: "bg-[#e1e9f5]"
    },
    {
      image: `${process.env.PUBLIC_URL}/images/4.png`,
      title: "Marketing Goals",
      description: "The east side to a deluxe apartment in move on up to the east side",
      bg: "bg-[#d5e2f5]"
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-auto">
      <div className="max-w-7xl ml-0 mr-0 mx-auto">
        <div className="flex flex-nowrap p-0 m-0 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group ${category.bg} p-4 sm:p-6 text-center transition-all duration-300 hover:shadow-lg relative overflow-hidden cursor-pointer w-[394px] h-[300px] flex-shrink-0`}
            >
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#001848] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Image */}
              <div className="flex justify-center mb-4 mt-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-22 h-22 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
