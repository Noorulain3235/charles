import React from 'react';

export default function AboutCompanySection() {
  return (
    <div className="bg-gray-50 py-16 px-8 ">
      <div className="max-w-6xl mx-auto mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 mt-0 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={`${process.env.PUBLIC_URL}/images/1.jpg`} 
                alt="Business meeting - woman and man working together at laptop"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-[#001848] mb-8 ml-10">
              ABOUT OUR COMPANY
            </h2>
            
            <div className="space-y-6 text-gray-600 text-center mb-12">
              <p className="leading-relaxed">
                A tale of a fateful trip that started from this tropic port aboard this tiny ship 
                today still wanted by the government they survive as soldiers of fortune to a 
                deluxe apartment in the sky moving on up to the east side a family.
              </p>
              
              <p className="leading-relaxed">
                The government they survive as soldiers of fortune baby if you've ever 
                wondered the east side to a deluxe apartment.
              </p>
            </div>
            <div className="border-t border-dotted border-gray-400 my-4"></div>

            {/* Vision, Missions, Goals Section */}
            <div className="grid grid-cols-3 gap-8">
              {/* Vision */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/download (6).png`} 
                    alt="Vision icon"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
              </div>

              {/* Missions */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/download.jpg`} 
                    alt="Missions icon"
                    className="w-15 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Missions</h3>
              </div>

              {/* Goals */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/images (4).png`} 
                    alt="Goals icon"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Goals</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
