import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, Sparkles } from "lucide-react";

const WebinarPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const closed = sessionStorage.getItem("webinarPopupClosed");
    if (!closed) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("webinarPopupClosed", "true"); // mark as closed
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl z-[10000]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Background & Orbs */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-300 to-purple-200 rounded-full opacity-20 blur-3xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-300 to-purple-200 rounded-full opacity-20 blur-3xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-sm transition"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Popup Content */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-10">
              {/* Left Section */}
              <motion.div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full w-fit"
                >
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700">
                    Live Masterclass
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"
                >
                  AI Magic Rostering{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Masterclass
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 mb-6 leading-relaxed"
                >
                  Build your first AI Agent completely free. Learn directly from
                  industry experts on advanced rostering strategies.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-2"
                >
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">
                    Led by Industry Experts
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Subash", "Mamtha", "Prasanna", "Shashank"].map((name) => (
                      <span
                        key={name}
                        className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col justify-between"
              >
                {/* Date & Time */}
                <div className="space-y-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="text-xs text-gray-600 font-semibold uppercase">
                          Date
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          November 26 (Wednesday)
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600 font-semibold uppercase">
                          Time
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          11:00 PM IST / 12:30 PM ET
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Offer */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-4 mb-6"
                >
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">
                        🎟️ Early Bird Offer — Limited Seats Available
                      </p>
                      <p className="text-sm text-gray-700 mb-1">
                        Enjoy{" "}
                        <span className="font-semibold text-amber-700">
                          50 free seats
                        </span>{" "}
                        exclusively for early registrants.
                      </p>
                      <p className="text-sm text-gray-700">
                        Additional attendees can join for only{" "}
                        <span className="font-semibold text-amber-700">
                          $9 per seat
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClose}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  <a
                    href="https://events.teams.microsoft.com/event/f08bab19-5762-4079-9b37-4742e8b7432c@0ef854d9-b367-45e6-bf60-9b44cb293f84/registration"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reserve Your Spot Now
                  </a>
                </motion.button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  🎉 Free for first 50 registrations
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebinarPopup;
