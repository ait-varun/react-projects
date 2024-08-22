"use client";
import { useEffect, useRef } from "react";
import { animate } from "popmotion";

export default function Contact() {
  const svgRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // SVG animation
    if (svgRef.current) {
      animate({
        from: 0,
        to: 20,
        repeat: 2,
        repeatType: "reverse",
        duration: 1000,
        onUpdate: (latest) => {
          if (svgRef.current) {
            svgRef.current.setAttribute("width", `${latest}%`);
            svgRef.current.setAttribute("height", `${latest}%`);
          }
        },
      });
    }

    // Text animations
    if (titleRef.current) {
      animate({
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
        duration: 1000,
        onUpdate: (latest) => {
          titleRef.current.style.opacity = latest.opacity;
          titleRef.current.style.transform = `translateY(${latest.y}px)`;
        },
      });
    }

    if (paragraphRef.current) {
      const words = paragraphRef.current.innerText.split(" ");
      paragraphRef.current.innerHTML = words
        .map((word) => `<span>${word} </span>`)
        .join("");

      const spans = paragraphRef.current.querySelectorAll("span");
      spans.forEach((span, index) => {
        animate({
          from: { opacity: 0, y: 20 },
          to: { opacity: 1, y: 0 },
          duration: 1500,
          delay: index * 50,
          onUpdate: (latest) => {
            span.style.opacity = latest.opacity;
            span.style.transform = `translateY(${latest.y}px)`;
            span.style.display = "inline-block";
          },
        });
      });
    }
  }, []);

  return (
    <>
      {" "}
      <section className="bg-gray-100 flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 ref={titleRef} className="text-3xl font-bold mb-4 opacity-0">
            Contact Us
          </h2>
          <p ref={paragraphRef} className="text-lg text-center max-w-2xl mb-8">
            We&apos;re always here to help. Whether you have a question about
            our services, need technical support, or just want to chat,
            don&apos;t hesitate to reach out. Our team is ready to assist you in
            any way we can.
          </p>
        </div>
        <div className="w-64 h-64 flex items-center justify-center">
          <svg
            ref={svgRef}
            width="20%"
            height="20%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#4299e1" />
            <path
              d="M50 25 L50 75 M25 50 L75 50"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
