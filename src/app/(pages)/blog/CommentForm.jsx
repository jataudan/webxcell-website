"use client";

import { useState } from "react";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Comment Submitted:", formData);
    // Add form submission logic here (e.g., send data to API)
  };

  return (
    <div className="mt-9 bg-white">
      <h2 className="text-[28px] text-[var(--black)] font-bold mb-4">
        Leave a Comment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full placeholder:text-[var(--black)] font-semibold placeholder:text-[14px] py-2 border-b border-[var(--light-sky-blue)] focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full placeholder:text-[var(--black)] font-semibold placeholder:text-[14px] py-2 border-b border-[var(--light-sky-blue)] focus:outline-none"
          />
        </div>

        {/* Message Input */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Message"
            rows="4"
            className="placeholder:text-[var(--black)] font-medium placeholder:text-[14px] w-full mt-4 px-4 py-2 bg-[var(--light-sky-blue)] focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          POST COMMENT
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
