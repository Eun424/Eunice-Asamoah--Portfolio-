import React, { useEffect, useRef, useState } from "react";
import { skills } from "../data/data";
import MySkills from "../assets/images/MySkills.png";

export default function SkillsSection() {
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
      id="skills"
      className={`py-16 px-6 bg-white transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center justify-center gap-2 mx-auto">
          <span className="text-black">My</span>
          <span className="text-orange-500">Skills</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Left: Skills grid with fixed max width */}
        <div className="flex-1 max-w-[400px] grid grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <article
                key={skill.id}
                className={`flex flex-col items-center p-4 rounded-md shadow-md transition-shadow hover:shadow-xl cursor-pointer max-h-[160px]
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{
                  backgroundColor: skill.color,
                  transitionDelay: `${i * 150}ms`,
                  color: "#222",
                }}
                aria-label={skill.title}
              >
                <div className="bg-white border border-black p-2 w-14 h-14 flex items-center justify-center rounded-md mb-3">
                  <Icon className="text-3xl" />
                </div>
                <p className="text-md font-semibold">{skill.title}</p>
              </article>
            );
          })}
        </div>

        {/* Right: Bigger Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={MySkills}
            alt="My skills"
            className="w-96 h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
