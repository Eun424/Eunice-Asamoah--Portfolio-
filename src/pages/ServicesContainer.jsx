import React, { useEffect, useRef, useState } from "react";
import { services } from "../data/data";

export default function ServicesContainer() {
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
      id="services"
      ref={ref}
      className={`py-12 px-6 bg-white transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center justify-center gap-2 mx-auto">
          <span className="text-black">My</span>
          <span className="text-orange-500">Services</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {[services[0], services[1]].map((s, idx) => {
            const Icon = s.icon;
            const bgColors = ["#0B3D91", "#CC5500"];
            const bgColor = bgColors[idx];
            const textColor = "#fff";
            const iconBgColor = "rgba(255,255,255,0.2)";
            const iconColor = "text-white";

            return (
              <article
                key={s.id}
                className="flex items-center p-6 rounded-md shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: bgColor, minHeight: "180px" }}
              >
                <div
                  className="flex-shrink-0 border border-white p-3 w-16 h-16 flex items-center justify-center rounded-md"
                  style={{ backgroundColor: iconBgColor }}
                >
                  <Icon className={`${iconColor} text-2xl`} />
                </div>

                <div className={`ml-4 flex-1`} style={{ color: textColor }}>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm mt-1 leading-relaxed">{s.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {[services[2], services[3]].map((s, idx) => {
            const Icon = s.icon;
            const bgColors = ["#8A9A5B", "#4A4A4A"];
            const bgColor = bgColors[idx];
            const textColor = "#fff";
            const iconBgColor = "rgba(255,255,255,0.2)";
            const iconColor = "text-white";

            return (
              <article
                key={s.id}
                className="flex items-center p-6 rounded-md shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: bgColor, minHeight: "180px" }}
              >
                <div
                  className="flex-shrink-0 border border-white p-3 w-16 h-16 flex items-center justify-center rounded-md"
                  style={{ backgroundColor: iconBgColor }}
                >
                  <Icon className={`${iconColor} text-2xl`} />
                </div>

                <div className={`ml-4 flex-1`} style={{ color: textColor }}>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm mt-1 leading-relaxed">{s.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
