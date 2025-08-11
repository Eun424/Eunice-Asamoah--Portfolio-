import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactMeSection() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.subject || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    // Add your form submission logic here
    setStatus("Message sent! Thank you for getting in touch.");
    setFormData({ name: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">
        Get in Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-[#FFEDD5] p-8 rounded-lg shadow-lg flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-3 rounded-md border border-orange-500 bg-[#FFEDD5] focus:outline-none focus:ring-2 focus:ring-orange-600 text-orange-800 placeholder-orange-600"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-3 rounded-md border border-orange-500 bg-[#FFEDD5] focus:outline-none focus:ring-2 focus:ring-orange-600 text-orange-800 placeholder-orange-600"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Message"
            className="p-3 rounded-md border border-orange-500 bg-[#FFEDD5] focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none text-orange-800 placeholder-orange-600"
            required
          />
          {/* Button wrapper div to control alignment */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="inline-flex bg-orange-500 border border-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 hover:text-white transition"
            >
              Send Message
            </button>
          </div>

          {status && (
            <p className="mt-2 text-center text-green-700 font-semibold">{status}</p>
          )}
        </form>

        {/* Right side: Contact info */}
        <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center gap-8 text-white">
          <ContactInfoItem
            icon={<FaPhoneAlt className="text-orange-500 text-2xl" />}
            label="Phone"
            value="+233 559972494"
          />
          <ContactInfoItem
            icon={<FaEnvelope className="text-orange-500 text-2xl" />}
            label="Email"
            value="euniceasamoah399@gmail.com"
          />
          <ContactInfoItem
            icon={<FaMapMarkerAlt className="text-orange-500 text-2xl" />}
            label="Location"
            value="Accra - Ghana"
          />
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="min-w-[40px]">{icon}</div>
      <div>
        <p className="font-semibold text-orange-400">{label}</p>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  );
}
