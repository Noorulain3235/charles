import React from "react";

import Testimonials from "../component/Testimonials";




export default function Team2() {
    return (
        <>
            <div className="py-6 bg-gray-600 h-[300px] flex justify-center items-center">
                <h1 className="text-3xl text-white md:text-4xl tracking-[3px] font-montserrat font-normal text-center">
                   OUR RECOMMENDATION
                  
                </h1>
            </div>
            <Testimonials/>

        </>
    );
}