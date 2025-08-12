import React from "react";



export default function Contact() {
    return (
        <>
            <div className=" w-full flex flex-col md:flex-row mt-10 px-3 md:px-20 py-16 text-center items-center">
                {/* left side */}
                <div className="flex flex-col items-center md:items-start md:w-1/2">
                    <h1 className="text-3xl text-gray-600 md:text-4xl py-5 tracking-[3px] font-montserrat font-normal">
                        CONTACT US
                    </h1>
                    <p className="text-gray-600 mb-4 w-[80%] md:w-[70%]">
                        Feel free to contact us to provide some feedback on our templates,
                        give us suggestions for new templates and themes, or to just say hello!
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar.
                    </p>
                    <div className="border-t border-solid border-black-600 mt-8"></div>

                    {/* 1 */}
                    <div className="flex items-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <span className="ml-2 text-gray-600"> 1234 Some Avenue, New York, NY 56789</span>
                    </div>

                    {/* 2 */}

                    <div className="flex items-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg>
                        <span className="ml-2 text-gray-600"> info@youwebsite.com</span>
                    </div>

                    {/* 3 */}

                    <div className="flex items-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        <span className="ml-2 text-gray-600">  (123) 456-7890</span>
                    </div>
                </div>




                {/* right side */}
                <div className="flex flex-col items-center md:items-start md:w-1/2">
                    <h1 className="text-3xl mt-4  text-gray-600 md:text-4xl py-5 tracking-[3px] font-montserrat font-normal">
                        SAY HELLO
                    </h1>

                    <form className="flex flex-col mt-10  w-full max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-gray-300 p-3 mb-4 w-full focus:outline-none focus:border-black"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-gray-300 p-3 mb-4 w-full focus:outline-none focus:border-black"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="border border-gray-300 p-3 mb-4 w-full h-28 resize-none focus:outline-none focus:border-black"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-black text-white w-40 h-18 py-3 px-4 hover:bg-gray-800 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>

                </div>



            </div>



        </>
    );
}