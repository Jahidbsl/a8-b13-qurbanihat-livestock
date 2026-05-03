"use client";

import React, { useState, useEffect } from "react";
import { Rocket } from "@gravity-ui/icons";
import { toast } from "react-toastify";

const BookingModal = ({ status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      console.log("Booking Data:", payload);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Booking confirmed successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to confirm booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        
       
      >
        Booking
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white dark:bg-zinc-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <form onSubmit={handleBooking}>
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 dark:border-zinc-800 flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Rocket className="text-green-600 w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-zinc-100">
                  Confirm Your Purchase
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600 dark:text-zinc-400">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600 dark:text-zinc-400">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600 dark:text-zinc-400">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600 dark:text-zinc-400">Shipping Address</label>
                  <textarea
                    name="address"
                    required
                    rows="3"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none"
                    placeholder="Enter full address"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 dark:bg-zinc-800/50 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white text-sm font-bold rounded-xl shadow-md flex items-center gap-2 transition-all active:scale-95"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;