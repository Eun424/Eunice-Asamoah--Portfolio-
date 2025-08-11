import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      {/* Social media icons in one line */}
      <div className="flex justify-center space-x-6 mb-2 text-2xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-500 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://github.com/Eun424"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-500 transition"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/eunice-asamoah-282198247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-500 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright and developed text */}
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.{" "}
        <span className="text-orange-500">Developed</span> By Eunice Asamoah
      </p>
    </footer>
  );
}
