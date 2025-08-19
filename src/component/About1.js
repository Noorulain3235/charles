import React, { useState } from "react";

// colors mapping code
const colorClassMap = {
  black: "bg-black",
  red: "bg-red-500",
  green: "bg-green-500",
  white: "bg-white",
};

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState("M");

  const activeImage = product.colors.find(
    (c) => c.name === selectedColor
  )?.imageUrl;

  return (
    <div className="font-sans max-w-sm w-full bg-white  overflow-hidden group ">
      {/*image */}
      <div className="relative">
        <img
          src={activeImage}
          alt={`${product.name} in ${selectedColor}`}
          className="w-full h-32 md:h-80 object-fill"
        />
      </div>

      {/* card setup code */}
      <div className="p-3 text-center">
        <p className="text-gray-400 text-xs md:text-sm ">{product.category}</p>
        <h3 className=" text-sm md:text-base font-serif text-gray-600 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-400  text-sm md:text-base font-bold mb-2">
          ${product.price.toFixed(2)}
        </p>

        {/* Size code*/}
        <div className="flex justify-center items-center space-x-2 mb-2 md:mb-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-4 h-4 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm font-medium border transition-colors
                ${selectedSize === size
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Color code */}
        <div className="flex justify-center items-center space-x-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-4 h-4 md:w-6 md:h-6 rounded-full border border-gray-300 transition-transform duration-200
                ${colorClassMap[color.name]}
                ${selectedColor === color.name
                  ? "ring-2 ring-offset-2 ring-black"
                  : ""
                }`}
              aria-label={`Select color ${color.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function About1() {
  // card things
  const products = [
    {
      name: "Timeless Classic Collection",
      category: "Work & Office ",
      price: 124.90,
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "black", imageUrl: `${process.env.PUBLIC_URL}/images/img-08-a-black-300x366.jpg` },
        { name: "red", imageUrl: `${process.env.PUBLIC_URL}/images/img-08-a-red-300x366.jpg` },
        { name: "green", imageUrl: `${process.env.PUBLIC_URL}/images/img-08-a-green-300x366.jpg` },
        { name: "white", imageUrl: `${process.env.PUBLIC_URL}/images/img-08-a-400x488.jpg` },
      ],
    },
    {
      name: "Bohemain Rhapsody Attire",
      category: "Casual ",
      price: 145.50,
      sizes: ["S", "M", "L"],
      colors: [
        { name: "black", imageUrl: `${process.env.PUBLIC_URL}/images/img-06-a-black-300x366.jpg` },
        { name: "green", imageUrl: `${process.env.PUBLIC_URL}/images/img-06-a-green-300x366.jpg` },
        { name: "red", imageUrl: `${process.env.PUBLIC_URL}/images/img-06-a-red-300x366.jpg` },
      ],
    },
    {
      name: " Midnight Gala Maxi Dress",
      category: "Evening Dresses",
      price: 175.00,
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "white", imageUrl: `${process.env.PUBLIC_URL}/images/img-05-a-white-300x366.jpg` },
        { name: "red", imageUrl: `${process.env.PUBLIC_URL}/images/img-05-a-red-300x366.jpg` },
        { name: "black", imageUrl: `${process.env.PUBLIC_URL}/images/img-05-a-black-300x366.jpg` },
        { name: "green", imageUrl: `${process.env.PUBLIC_URL}/images/img-05-a-green-300x366.jpg` },
      ],

    },
    {
      name: " Power Suit Ensemble",
      category: "Casual",
      price: 125.50,
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "white", imageUrl: `${process.env.PUBLIC_URL}/images/img-01-a-400x488.jpg` },
        { name: "black", imageUrl: `${process.env.PUBLIC_URL}/images/img-01-a-black-300x366.jpg` },
        { name: "green", imageUrl: `${process.env.PUBLIC_URL}/images/img-01-a-green-300x366.jpg` },

        { name: "red", imageUrl: `${process.env.PUBLIC_URL}/images/img-01-a-red-300x366.jpg` },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen py-10  bg-white">
      <div className="py-24  text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mt-2 font-serif italic">
          Most Popular
        </h1>
      </div>

      {/* Cards code*/}
      <div className="grid grid-cols-2 md:mb-8 md:sm:grid-cols-2
       md:lg:grid-cols-4 gap-2 md:gap-4 px-8 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
