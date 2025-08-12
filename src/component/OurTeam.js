import React from "react";
import Team from "./Team";




export default function Team2() {
    return (
        <>
            <div className="py-6 bg-gray-600 h-[300px] flex justify-center items-center">
                <h1 className="text-3xl text-white md:text-4xl tracking-[3px] font-montserrat font-normal text-center">
                    OUR TEAM
                </h1>
            </div>
            <Team/>

        </>
    );
}