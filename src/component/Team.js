import React from "react";



export default function Team() {
  return (
    <>
      <div className="py-10">
        <h1 className="text-3xl text-gray-800 md:text-4xl  py-5 [letter-spacing:3px] font-montserrat font-normal text-center">
          OUR TEAM
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-5 flex-wrap">

          {/* 1 */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-semibold">James Daniels</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/avatar5.jpg`}
              alt="Team Member 1"
              className="mt-5 mb-4 object-fill w-48 h-48 sm:w-48 sm:h-48 "
            />
            <p className="mt-2 text-center text-gray-600">CEO</p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-semibold">Michael Williams</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/avatar2.jpg`}
              alt="Team Member 2"
              className="mt-5 mb-4 object-fill w-40 h-40 sm:w-48 sm:h-48 "
            />
            <p className="mt-2 text-center text-gray-600">Manager</p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-semibold">Liam Lucas</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/avatar3.jpg`}
              alt="Team Member 3"
              className="mt-5 mb-4 object-fill w-40 h-40 sm:w-48 sm:h-48 "
            />
            <p className="mt-2 text-center text-gray-600">Developer</p>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-semibold">Charlotte Harrison</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/avatar4.jpg`}
              alt="Team Member 4"
              className="mt-5 mb-4 object-fill w-40 h-40 sm:w-48 sm:h-48 "
            />
            <p className="mt-2 text-center text-gray-600">Designer</p>
          </div>

        </div>


      </div>



    </>
  );
}

