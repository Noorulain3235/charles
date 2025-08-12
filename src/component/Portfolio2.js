import React from "react";
import Portfolio from "./Portfolio";




export default function Portfolio2() {
    return (
        <>
            <div className="py-6 bg-gray-600 h-[300px] flex justify-center items-center">
                <h1 className="text-3xl text-white md:text-4xl tracking-[3px] font-montserrat font-normal text-center">
                    PORTFOLIO
                </h1>
            </div>
            <Portfolio/>

        </>
    );
}