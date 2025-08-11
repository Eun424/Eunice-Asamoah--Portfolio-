import React, { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/images/AboutMe.png";

export default function AboutMeSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className={`w-full py-16 px-6 flex flex-col md:flex-row items-stretch gap-0 transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left - Image with lighter orange background and curve */}
      <div className="relative flex-1 bg-[#FFEBD6] flex justify-center items-center rounded-l-lg overflow-hidden p-6">
        <img
          src={aboutImage}
          alt="About Me"
          className="w-full max-w-md h-[400px] object-cover rounded-md"
        />
        {/* SVG Curve Partition */}
        <svg
          className="absolute top-0 right-0 h-full w-16 md:w-24 text-white"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C50,100 50,0 100,100 L100,0 L0,0 Z" />
        </svg>
      </div>

      {/* Right - Description with dark background */}
      <div className="flex-1 bg-gray-800 p-10 rounded-r-lg text-left text-white flex flex-col justify-center">
        <h2 className="text-3xl font-extrabold text-orange-500 mb-4">About Me</h2>
        <p className="text-lg font-bold mb-2">I am a Full Stack Developer</p>
        <p className="leading-relaxed">
          I am a creative and results-driven full stack developer passionate about building functional,
          scalable, and visually engaging web applications. My expertise spans frontend and backend
          technologies including HTML, CSS, JavaScript, React, TailwindCSS, and backend frameworks such as
          Node.js, Express.js, MongoDB, and SQL to deliver complete solutions. I focus on clean,
          maintainable code and user-centered design to create digital experiences that are both
          powerful and enjoyable.
        </p>
      </div>
    </section>
  );
}
