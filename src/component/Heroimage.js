import React from "react";

export default function Heroimage() {
    return (
        <>
            <div className="relative flex w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/images.jpeg`}
                        alt=""
                        className="absolute w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full  flex flex-col items-center justify-center text-white">
                        <div className="flex">
                            <h1 className=" text-3xl md:text-6xl [letter-spacing:10px] font-bold">Next</h1>
                            <h1 className="text-3xl md:text-6xl [letter-spacing:10px]">startup</h1>
                           
                        </div>
                         <p  className="text-1xl mt-5 font-semibold  [letter-spacing:3px]">Landing Page</p>
                    </div>
                </div>
                <div className="absolute 
                mt-[70%] ml-0 w-full  /* mobile default */
                sm:mt-[37%] sm:ml-[30%] sm:w-[40%]">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/9.png`}
                        alt=""
                        className="object-fill w-full"
                    />
                </div>

            </div>
        </>
    );
}
