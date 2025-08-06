import React from 'react';


export default function Team() {
  return (
    <>
    <div className=' py-10 px-10 flex flex-col md:flex-row gap-10  items-center justify-around   text-justify'>
        <div  className="border border-black rounded-sm w-full md:w-1/2 h-[300px] ">
           <img 
    src={`${process.env.PUBLIC_URL}/images/IMG1.jpg`} 
    alt="Vision"
    className="w-full  h-[200px] object-top "
  />
    <h1 className='text-2xl mt-4 text-center'>Richards Mills</h1>
    <p className='text-1xl  text-gray-700 text-center italic '>Sales Consultant</p>

        </div>


        <div  className="border border-black rounded-sm w-full md:w-1/2 h-[300px] ">
           <img 
    src={`${process.env.PUBLIC_URL}/images/IMG2.jpg`} 
    alt="Vision"
    className=" w-full h-[200px] object-top "
  />
    <h1 className='text-2xl mt-4 text-center'>Mike Hussey</h1>
    <p className='text-1xl  text-gray-700 text-center italic '>Founder, CEO</p>
        </div>


        <div  className="border border-black rounded-sm w-full md:w-1/2 h-[300px] ">  <img 
    src={`${process.env.PUBLIC_URL}/images/IMG3.jpg`} 
    alt="Vision"
    className=" w-full h-[200px] object-top "
  />
    <h1 className='text-2xl mt-4 text-center'>Jenilia D’sosa</h1>
    <p className='text-1xl  text-gray-700 text-center italic '>Marketing Lead</p>
    </div>



        <div  className="border border-black rounded-sm w-full md:w-1/2 h-[300px] ">
           <img 
    src={`${process.env.PUBLIC_URL}/images/IMG4.jpg`} 
    alt="Vision"
    className=" w-full  h-[200px] object-top "
  />
    <h1 className='text-2xl mt-4 text-center'>David Warner</h1>
    <p className='text-1xl  text-gray-700 text-center italic '>SEO Analyst</p>
        </div>
      </div>
    
    
    </>
  );
}





