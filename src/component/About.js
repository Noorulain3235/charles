import React from "react";

const CircularProgress = ({ percentage, label }) => {
  const radius = 50;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="rotate-[-90deg]"
      >
        {/* Background circle */}
        <circle
          stroke="#e5e7eb" // Tailwind gray-200
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke="#6b7280" // Tailwind gray-500
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute mt-12 text-lg font-medium">
        {percentage}%
      </div>
      <p className="mt-2 text-gray-700">{label}</p>
    </div>
  );
};

export default function App() {
  return (
   
    <div className="flex mt-[50%] md:mt-[20%]  flex-col md:flex-row items-center justify-center min-h-screen gap-10 px-6 md:px-16">
      {/* right side */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-gray-800 md:text-4xl mt-[10%] py-5 [letter-spacing:3px] font-montserrat font-normal">
          ABOUT STUDIO
        </h1>
        <p className="text-gray-700">
          The collaborative process of web development requires close integration
          of technology and design - two disciplines that inform one another. We
          make hip and exciting web sites. Big and Small. Concept development,
          interface design, production management.
        </p>
        <img
                        src={`${process.env.PUBLIC_URL}/images/Screenshot 2025-08-08 035044.png`}
                        alt=""
                        className="h-20 w-40  "
                    />
      </div>

      {/* left side */}
      <div className="flex flex-col md:flex-row justify-center md:mt-[7%] p-10">
        <CircularProgress percentage={93} label="Design" />
        <CircularProgress percentage={82} label="Programming" />
        <CircularProgress percentage={68} label="Photography" />
      </div>
    </div>
  );
}


