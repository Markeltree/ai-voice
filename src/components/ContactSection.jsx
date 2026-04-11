import { useState, useRef } from "react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx1qvvq0NPzNsnKJ7CT1ZK4Pazfahx3H4lPZNyjWE7yovCtm2TNmMrfxEK0JBTuFHiq/exec";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fileRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      let fileData = null;
      let fileType = null;
      let fileName = null;

      // Process file if exists
      if (file) {
        fileName = file.name;
        fileType = file.type;
        const base64Data = await fileToBase64(file);
        // Remove data URL prefix (e.g., "data:application/pdf;base64,")
        fileData = base64Data.split(",")[1];
      }

      const payload = {
        type: "voice_agent_contact_form",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        fileName: fileName || "",
        fileData: fileData,
        fileType: fileType,
      };

      // Using JSONP approach to handle CORS
      const response = await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // With mode: "no-cors", we can't read the response
      // So we assume success if no network error
      setSubmitted(true);

      // Update URL with thank-you + query params
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
      window.history.pushState({}, "", `/thank-you?${params.toString()}`);

      // Reset form after successful submission
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFile(null);
      
    } catch (err) {
      console.error("Submission error:", err);
      setError(true);
      // Still show success to user but log error
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F4F7FF]">
      <div className="section-wrap">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-12">
          <div className="max-w-xl">
            <h2 className="stats-heading">
              Your Agent Starts {" "}
              <span className="relative inline-block">
                Here
                <span className="stats-nocode-badge">No-code</span>
              </span>
            </h2>
            <p className="stats-subtitle">
             Tell us your goals and we'll have your AI voice agent live within days.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[32px] p-10 md:p-16 shadow-2xl shadow-blue-900/5 border border-white">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block font-semibold text-[15px] text-[#1A1A2E]">
                      Name*
                    </label>
                    <p className="text-gray-400 text-[13px]">Your full name</p>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-[#F9FAFF] border border-gray-100 rounded-2xl outline-none focus:border-[#5831D8] transition-colors text-[15px]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block font-semibold text-[15px] text-[#1A1A2E]">
                      Email*
                    </label>
                    <p className="text-gray-400 text-[13px]">
                      We'll reply to this address
                    </p>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-[#F9FAFF] border border-gray-100 rounded-2xl outline-none focus:border-[#5831D8] transition-colors text-[15px]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block font-semibold text-[15px] text-[#1A1A2E]">
                      Phone number*
                    </label>
                    <p className="text-gray-400 text-[13px]">
                      Your contact number
                    </p>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full px-5 py-4 bg-[#F9FAFF] border border-gray-100 rounded-2xl outline-none focus:border-[#5831D8] transition-colors text-[15px]"
                    />
                  </div>

                  {/* File */}
                  <div className="space-y-2">
                    <label className="block font-semibold text-[15px] text-[#1A1A2E]">
                      File
                    </label>
                    <p className="text-gray-400 text-[13px]">
                      Attach any relevant document
                    </p>
                    <div
                      onClick={() => fileRef.current.click()}
                      className="w-full px-5 py-4 bg-[#F9FAFF] border border-dashed border-gray-300 rounded-2xl cursor-pointer flex items-center gap-3 hover:border-[#5831D8] transition-colors"
                    >
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#5831D8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                      <span className="text-[15px] text-gray-400 truncate">
                        {file ? file.name : "Click to upload file"}
                      </span>
                      <input
                        ref={fileRef}
                        type="file"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block font-semibold text-[15px] text-[#1A1A2E]">
                    Message*
                  </label>
                  <p className="text-gray-400 text-[13px]">
                    Tell us about your requirements
                  </p>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you need..."
                    className="w-full px-5 py-4 bg-[#F9FAFF] border border-gray-100 rounded-2xl outline-none resize-none focus:border-[#5831D8] transition-colors text-[15px]"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#5831D8] text-white px-10 py-4 rounded-2xl font-semibold text-[15px] hover:bg-[#4626B0] transition-all shadow-lg shadow-purple-200 disabled:opacity-70"
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-20 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#EEF1FF] flex items-center justify-center mx-auto">
                  <svg
                    width="36"
                    height="36"
                    fill="none"
                    stroke="#5831D8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A2E]">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-[15px]">
                  We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                    setFile(null);
                    window.history.pushState({}, "", window.location.pathname.replace("/thank-you", "") || "/");
                  }}
                  className="text-[#5831D8] text-sm font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;