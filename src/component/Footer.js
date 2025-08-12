import React from "react";



export default function Contact() {
    return (
        <>

            <div className="py-16 mt-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05062044004!2d-74.3091695806123!3d40.69719334793302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1754991820111!5m2!1sen!2s"
                    className="w-full h-[450px] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>


            <div className="w-full flex flex-col md:flex-wrap md:flex-row mt-10 px-3 md:px-20 py-16 text-center  md:text-left items-center md:items-start">

                {/* 1 */}
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                    <h1 className="text-3xl text-gray-600 md:text-4xl py-5 tracking-[3px] font-montserrat font-normal">
                        ABOUT
                    </h1>
                    <p className="text-gray-600 mb-4 w-[70%] py-10 md:w-full">
                        Thanks for choosing Pheromone for your next project!
                        Pheromone is a unique template for building beautiful
                        business or personal website.
                    </p>
                </div>

                {/* 2 */}
                <div className="flex flex-col items-center md:px-4 md:items-start md:w-1/3">
                    <h1 className="text-3xl text-gray-600 md:text-4xl py-5 tracking-[3px] font-montserrat font-normal">
                        Why us
                    </h1>
                    <p className="text-gray-600 mb-4 w-[70%]  py-10 md:w-full">
                        Easy to use and coder friendly. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nulla convallis pulvinar vestibulum.
                        Donec eleifend, sem dictum.
                    </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col  items-center md:items-start md:w-1/3">
                    <h1 className="text-3xl text-gray-600 md:text-4xl py-5 tracking-[3px] font-montserrat font-normal">
                        Contact
                    </h1>


                    <div className="flex items-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        <span className="ml-2 text-gray-600">(123) 456-7890</span>
                    </div>


                    <div className="flex items-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg>
                        <span className="ml-2 text-gray-600">info@youwebsite.com</span>
                    </div>


                    <div className="flex items-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <span className="ml-2 text-gray-600">1234 Some Avenue, New York, NY 56789</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-solid border-gray-300 mb-10  w-full py-2"></div>

            <div className="flex flex-col sm:flex-row items-center justify-center text-gray-600 py-10 gap-2 sm:gap-3">
                <span className="text-sm sm:text-base">TEMPLATE BY</span>

                {/* Heart Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5 text-black-200 hover:text-black-600 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314"
                    />
                </svg>

                <span className="text-sm sm:text-base">FORBETTERWEB</span>
            </div>







        </>
    );
}