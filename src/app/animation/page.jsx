// "use client";
// import { useEffect, useRef } from "react";
// import { animate } from "popmotion";

// export default function Contact() {
//   const svgRef = useRef(null);
//   const titleRef = useRef(null);
//   const paragraphRef = useRef(null);

//   useEffect(() => {
//     // SVG animation
//     if (svgRef.current) {
//       animate({
//         from: 0,
//         to: 20,
//         repeat: 2,
//         repeatType: "reverse",
//         duration: 1000,
//         onUpdate: (latest) => {
//           if (svgRef.current) {
//             svgRef.current.setAttribute("width", `${latest}%`);
//             svgRef.current.setAttribute("height", `${latest}%`);
//           }
//         },
//       });
//     }

//     // Text animations
//     if (titleRef.current) {
//       animate({
//         from: { opacity: 0, y: 20 },
//         to: { opacity: 1, y: 0 },
//         duration: 1000,
//         onUpdate: (latest) => {
//           titleRef.current.style.opacity = latest.opacity;
//           titleRef.current.style.transform = `translateY(${latest.y}px)`;
//         },
//       });
//     }

//     if (paragraphRef.current) {
//       const words = paragraphRef.current.innerText.split(" ");
//       paragraphRef.current.innerHTML = words
//         .map((word) => `<span>${word} </span>`)
//         .join("");

//       const spans = paragraphRef.current.querySelectorAll("span");
//       spans.forEach((span, index) => {
//         animate({
//           from: { opacity: 0, y: 20 },
//           to: { opacity: 1, y: 0 },
//           duration: 1500,
//           delay: index * 50,
//           onUpdate: (latest) => {
//             span.style.opacity = latest.opacity;
//             span.style.transform = `translateY(${latest.y}px)`;
//             span.style.display = "inline-block";
//           },
//         });
//       });
//     }
//   }, []);

//   return (
//     <>
//       {" "}
//       <section className="bg-gray-100 flex flex-row items-center justify-center">
//         <div className="flex flex-col items-center justify-center">
//           <h2 ref={titleRef} className="text-3xl font-bold mb-4 opacity-0">
//             Contact Us
//           </h2>
//           <p ref={paragraphRef} className="text-lg text-center max-w-2xl mb-8">
//             We&apos;re always here to help. Whether you have a question about
//             our services, need technical support, or just want to chat,
//             don&apos;t hesitate to reach out. Our team is ready to assist you in
//             any way we can.
//           </p>
//         </div>
//         <div className="w-64 h-64 flex items-center justify-center">
//           <svg
//             ref={svgRef}
//             width="20%"
//             height="20%"
//             viewBox="0 0 100 100"
//             xmlns="http://www.w3.org/2000/svg">
//             <circle cx="50" cy="50" r="45" fill="#4299e1" />
//             <path
//               d="M50 25 L50 75 M25 50 L75 50"
//               stroke="white"
//               strokeWidth="8"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import React from "react";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Why Get Device Protection Plans?
        </h1>
        <p className="text-lg mb-6 text-purple-200">
          One Major Benefit Of Having A Device Protection Plan Is Saving Money
          On Expensive Repairs That Safeguards Against Damage, Loss, And
          Malfunctions.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Repair Plans</h2>
            <p className="text-purple-200">
              Efficient And Effective Solutions For Fixing Your Products,
              Ensuring They Work Like New.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Replacement Plans</h2>
            <p className="text-purple-200">
              Get Cover Offers Warranty Programs That Replace Products Versus
              Repair.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Accidental Damage Plans
            </h2>
            <p className="text-purple-200">
              Finding Skilled And Experienced Technicians For Appliance Repairs
              Can Be Difficult.
            </p>
          </div>
        </div>
        <button className="mt-6 bg-purple-500 hover:bg-purple-600 text-white">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2 relative flex justify-center items-center">
        <div className="water-drop-container w-[400px] h-[400px] relative">
          <div className="water-drop absolute inset-0 bg-gradient-to-br from-purple-400/40 to-indigo-400/40">
            <Image
              src="/comp.png"
              alt="Laptop"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .water-drop-container {
          perspective: 1000px;
        }
        .water-drop {
          border-radius: 60% 60% 60% 60% / 50% 50% 70% 70%;
          overflow: hidden;
          animation: morphDroplet 10s infinite alternate ease-in-out;
        }
        @keyframes morphDroplet {
          0% {
            border-radius: 60% 60% 60% 60% / 50% 50% 70% 70%;
          }
          50% {
            border-radius: 50% 70% 50% 70% / 60% 60% 70% 60%;
          }
          100% {
            border-radius: 70% 50% 70% 50% / 60% 70% 60% 70%;
          }
        }
      `}</style>
    </div>
  );
}
