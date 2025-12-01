import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import {
  FiMapPin,
  FiMail,
  FiUser,
  FiMessageSquare,
  FiPhone,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("validation");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    setLoading(true);
    setStatus("");

    const serviceId = "service_aonq8e9";
    const templateId = "template_uguun54";
    const publicKey = "g3kkCWDzUpSwZ-YZV";

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: formData,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a message — we’ll
            reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDEBAR */}
          <div className="space-y-5">
            <div className="bg-white border border-neutral-400 rounded-2xl p-10 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-6 bg-amber-500 rounded-full"></div>
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                  <div className="p-3 bg-white shadow rounded-xl">
                    <FiMapPin className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                  <div className="p-3 bg-white shadow rounded-xl">
                    <FiMail className="text-amber-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      twahid746@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                  <div className="p-3 bg-white shadow rounded-xl">
                    <FiPhone className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      +88 01825653993
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Response Time
                </h4>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-600">
                    Typically replies within 2–4 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border-1 border-gray-200 shadow-[0_6px_22px_rgba(0,0,0,0.07)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211456.91668941753!2d90.25487531119137!3d23.78106723705999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1760815826584!5m2!1sen!2sbd"
                className="w-full h-full min-h-[350px]"
                loading="lazy"
              ></iframe>
            </div>

            {/* FORM */}
            <div className="bg-white border border-neutral-400 rounded-2xl p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-amber-500 rounded-full"></div>
                Send Message
              </h2>

              {/* Alerts */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl">
                  ✓ Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl">
                  ✕ Failed to send message. Try again.
                </div>
              )}

              {status === "validation" && (
                <div className="mb-6 p-4 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-xl">
                  ⚠ Please fill in all required fields.
                </div>
              )}

              <div className="space-y-5">
                {/* NAME */}
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your Full Name"
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 outline-none transition-all"
                  />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Your Email Address"
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 outline-none transition-all"
                  />
                </div>

                {/* MESSAGE */}
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Tell us about your project..."
                    rows="4"
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-amber-500 outline-none resize-none transition-all"
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl flex items-center justify-center gap-3 shadow-lg active:scale-[0.98] transition disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                >
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <IoIosSend size={20} />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-center text-gray-500 pt-4">
                By submitting, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-12 text-center text-gray-500 text-sm">
          We value your privacy and never share your information.
        </p>
      </div>
    </div>
  );
};

export default Contact;
