import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Type,
} from "lucide-react";

import { toast } from "sonner";
import axios from "axios";
import baseURL from "../utils/constant.js";

const EmailPortal = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!email || !subject || !content) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${baseURL}/api/sendMail`, {
        email,
        subject,
        content,
      });

      if (res.data?.success === true) {
        toast.success("Email sent successfully");
        setEmail("");
        setSubject("");
        setContent("");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Background Subtle Gradient */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-[#fafafa]">
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-gray-100 to-transparent opacity-50" />
      </div>

      <main className="p-6 md:p-12 lg:p-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-3">
              DIGITIX.PVT {" "}
              <span className="text-gray-400">
                PORTAL
              </span>
            </h1>
            <p className="text-gray-500 text-lg font-medium">
              Professional aur high-impact cold outreach..
            </p>
          </header>

          {/* Main Form Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="grid gap-10">
              
              {/* Recipient Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 ml-1">
                  Recipient Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 ml-1">
                  Subject Line
                </label>
                <div className="relative group">
                  <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                  />
                </div>
              </div>

              {/* Body Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 ml-1">
                  Email Content 
                </label>
                <textarea
                  rows="10"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Contant..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-black placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all min-h-[250px]"
                />
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <motion.button
                  onClick={handleSend}
                  disabled={loading}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-black/10"
                >
                  <Send size={18} />
                  <span className="uppercase tracking-widest text-sm">
                    {loading ? "Processing..." : "Send Message"}
                  </span>
                </motion.button>
              </div>

            </div>
          </div>
          
          {/* Subtle Footer Note */}
          <footer className="mt-8 text-center">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.3em]">
              &copy; 2025 Digitix Agency &bull; Secure Transmission
            </p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};

export default EmailPortal;