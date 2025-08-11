import React, { useState, useEffect, useRef } from "react";
import myImage from "../assets/images/myImage.png";
import resume from "../assets/EuniceAsamoah CV.pdf"

export default function LandingSection() {
  const words = ["I'm a Full Stack Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToAbout = () => {
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const currentWord = words[index];
    let typingSpeed = 120;

    if (isDeleting) typingSpeed /= 2;

    const timer = setTimeout(() => {
      setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFEDD5] px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left side */}
        <div className="flex-1 space-y-4 text-left">
          <p className="text-lg font-semibold text-gray-700">HI, MY NAME IS EUNICE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 h-16 whitespace-nowrap">
            {text}
            <span className="border-r-2 border-orange-500 animate-pulse"></span>
          </h1>
          <p className="text-lg text-gray-600">Based in Accra, Ghana</p>
          <div className="flex gap-4">
            <a
              href={resume}
              download= "resume"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-3 shadow-lg shadow-black hover:bg-orange-600 transition rounded-md font-semibold"
            >
              View Resume
            </a>
            <button
              onClick={scrollToAbout}
              className="bg-orange-500 text-white px-6 py-3 shadow-lg shadow-black hover:bg-orange-600 transition rounded-md font-semibold"
            >
              About Me
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-center">
          <div className="bg-orange-500 p-4 rounded-full">
            <img
              src={myImage}
              alt="Eunice"
              className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
