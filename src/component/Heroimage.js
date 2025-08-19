import { Link } from "react-router-dom";
import React from "react";


export default function Heroimage() {
    return (
        <div className="w-full h-[450px] md:h-[550px] lg:h-[600px] sticky top-0 z-0">


            <img
                src={`${process.env.PUBLIC_URL}/images/images (1).jpeg`}
                alt="Hero"
                className="absolute w-full h-full object-cover"
            />


            <div className="absolute inset-0 flex flex-col items-center justify-center 
            text-center text-white px-4">
                <p className="text-xl font-semibold">Casual & Everyday</p>
                <h1 className="text-3xl md:text-5xl font-bold mt-2 font-serif italic">
                    Effortlessly blend comfort & style!
                </h1>


                <p className="text-base mt-5 font-semibold max-w-2xl">
                    Effortlessly blend comfort and style with our Casual & Everyday
                    collection, featuring cozy sweaters, versatile denim, laid-back tees,
                    and relaxed-fit joggers for your everyday adventures.
                </p>
                <Link
                    to="/"
                    className="block mt-5 font-semibold md:font-medium w-[170px]
                     text-sm text-center bg-transparent border border-white
               text-white py-3 hover:bg-white hover:text-black transition"
                >
                    VIEW COLLECTION
                </Link>

            </div>
        </div>
    );
}
