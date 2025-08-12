import React, { useEffect, useState } from 'react';

const slides = [
    { 
        id: 1, 
        image: `${process.env.PUBLIC_URL}/images/t1.jpg`, 
        name: "Richard Kidnall",
        feedback: "Thank you very much, the theme is great! Very concise and simple",
       
    },
    { 
        id: 2, 
        image: `${process.env.PUBLIC_URL}/images/t2.jpg`, 
        name: "Michael Smith",
        feedback: "Adorable minimalist theme! Should be working well as a canvas for any upcoming project." 
    },
    { 
        id: 3, 
        image: `${process.env.PUBLIC_URL}/images/t3.jpg`, 
        name: "Sarah Lee",
        feedback: "Amazing and SUPER easy to incorporate, looks like a great theme, full functionality indeed" 
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const { image, name, feedback } = slides[index];

    return (
        <div className="py-[200px] px-5 md:px-20">
            <h1 className="text-3xl text-gray-800 md:text-4xl py-5 tracking-[3px] font-montserrat font-normal text-center">
                TESTIMONIALS
            </h1>
            <div className="flex flex-col justify-center items-center gap-6 mt-10 px-5 text-center">
                
                {/* Image */}
                <div className="relative h-[100px] md:h-[200px] w-[100px] md:w-[200px] mx-auto">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-gray-600 mt-2 max-w-md">{feedback}</p>
                </div>
            </div>
             <div className="border-t border-solid border-black-800 mt-28"></div>
        </div>
    );
}
