import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted:', formData);
    alert("Quote request submitted! We'll get back to you soon.");
    
  };

  return (
    <>
      <div className="py-10 mt-20 text-center justify-center">
        <h1 className="text-4xl font-bold text-center justify-center: text-1xl">FREE CONSULTATION</h1>
        <p className="text-sm mt-4 text-center justify-center text-gray-700">
          A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers
        </p>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={`${process.env.PUBLIC_URL}/images/con img1.jpg`} 
              alt="Business meeting"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Right - Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className=" p-8 lg:p-12 rounded-lg ">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                Get Your Quote Today
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none text-gray-500"
                  >
                    <option value="">Service you're looking for?</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="strategy">Strategy Planning</option>
                    <option value="marketing">Marketing Services</option>
                    <option value="finance">Financial Advisory</option>
                    <option value="operations">Operations Management</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="px-4 py-3 border border-gray-300 rounded-lg w-full "
                ></textarea>

                <button
                  type="submit"
                  className="w-[200px] bg-blue-900  text-white  py-4 px-6 rounded-lg "
                >
                  GET A QUOTE
                </button>

                
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
