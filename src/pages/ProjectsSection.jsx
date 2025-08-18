import React from "react";
import todoImage from "../assets/images/Todo.png";
import travelImage from "../assets/images/Blog.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section className="bg-[#FFEDD5] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Todo List App */}
          <article className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img
              src={todoImage}
              alt="Todo List App"
              className="w-full h-44 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Todo List App
              </h3>
              <p className="text-gray-700 flex-1 mb-3">
                A collaborative project built with HTML, CSS, and JavaScript.
                This Todo List app helps users manage tasks efficiently.
              </p>
              <a
                href="https://list-ori.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold"
              >
                Live Demo <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </article>

          {/* Travel Blog */}
          <article className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img
              src={travelImage}
              alt="Travel Blog"
              className="w-full h-44 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Travel Blog
              </h3>
              <p className="text-gray-700 flex-1 mb-3">
                A React and Tailwind CSS app showcasing travel stories with
                favorites and interactive UI.
              </p>
              <a
                href="thecruzblog.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold"
              >
                Live Demo <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
