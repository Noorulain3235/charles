import React, { useState } from "react";

const images = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/w1.jpg`, alt: "brand-image1", title: "FORM IMAGE CREATIVE", category: ["design", "photo"], size: "" },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/w2.jpg`, alt: "brand-image2", title: "FORM IMAGE CREATIVE", category: ["design", "branding"], size: "" },
    { id: 6, src: `${process.env.PUBLIC_URL}/images/w13.jpg`, alt: "brand-image6", title: "FORM IMAGE CREATIVE", category: ["all"], size: "row-span-2" },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/w3.jpg`, alt: "brand-image3", title: "FORM IMAGE CREATIVE", category: ["design", "photo"], size: "" },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/w5.jpg`, alt: "brand-image4", title: "FORM IMAGE CREATIVE", category: ["design", "photo", "branding"], size: "" },
  
  { id: 5, src: `${process.env.PUBLIC_URL}/images/w6.jpg`, alt: "brand-image5", title: "FORM IMAGE CREATIVE", category: ["branding"], size: "" },

  { id: 7, src: `${process.env.PUBLIC_URL}/images/w7.jpg`, alt: "brand-image7", title: "FORM IMAGE CREATIVE", category: ["photo", "branding"], size: "" },
];

const categories = ["all", "design", "photo", "branding"];

export default function Lastwork() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category.includes(selectedCategory));

  return (
    <div className="flex flex-col mt-10 px-3 md:px-20 py-16 text-center items-center">
      <h1 className="text-3xl text-gray-700 md:text-4xl py-5 tracking-[3px] font-montserrat font-normal">
        LATEST WORK
      </h1>

      {/*buttons */}
      <div className="flex justify-center space-x-2 md:space-x-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`uppercase tracking-widest transition-colors ${
              selectedCategory === cat ? "text-black " : "text-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* image size */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px]">
        {filteredImages.map((img) => (
          <div key={img.id} className={`relative group overflow-hidden ${img.size}`}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
           {/* text */}
            <div className="absolute inset-0 flex items-end mb-8 justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-black text-lg">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
     

    </div>
  );
}
