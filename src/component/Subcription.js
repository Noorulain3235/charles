import React from "react";




export default function Subscription() {
    return (
        <div className="flex flex-col items-center justify-center max-h-screen bg-gray-100 p-20">
            <h1 className="text-3xl text-gray-800 mb-4  [letter-spacing:3px] font-montserrat font-normal">Subscribe</h1>
            <p className="text-gray-700 mt-5 mb-6">Sign up with your email address to receive news and updates.</p>
            <form className="flex mt-3 w-full max-w-sm">
                <input
                    type="email"
                    placeholder="Email address..."
                    className="w-[70%] h-[40px] px-4 py-2 border border-gray-300  mb-4"
                />
                <button
                    type="submit"
                    className="w-[30%] bg-black  h-[40px] text-white px-4 py-2  hover:bg-black-200 transition"
                >
                    Subscribe
                </button>
            </form>

            <img
                src={`${process.env.PUBLIC_URL}/images/mailchimp.png`}
                 alt="slide"
            />

        </div>
    );
}