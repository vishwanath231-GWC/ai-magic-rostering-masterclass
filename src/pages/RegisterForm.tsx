/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const RegisterForm = ({ selectedChallenges }: any) => {

    const SUPABASE_URL = "https://muxqrjyilrvgfxprxcfk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11eHFyanlpbHJ2Z2Z4cHJ4Y2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNTc2MjYsImV4cCI6MjA3NzgzMzYyNn0.dvR9jUnaDOuKlRDb7DO_Qgt7Ma7aMwggeHYif1pJvo0";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    reason: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const submitData = {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        organization: formData.organization,
        selected_challenges: selectedChallenges || "None selected",
        reason: formData.reason,
        created_at: new Date().toISOString()
      };

      // Insert data into Supabase using REST API
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`
          },
          body: JSON.stringify(submitData)
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Supabase error:", error);
        alert("Error saving data. Please try again.");
        return;
      }

      alert("Registration successful! We'll be in touch soon.");
      
      setIsOpen(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        organization: "",
        reason: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="font-semibold">
        <Button
          size="lg"
          className="group h-14 gap-2 px-8 text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Reserve Your Spot Now
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Join Our Platform</DialogTitle>
          <DialogDescription>
            Fill in your details to reserve your spot and get started
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 overflow-y-auto px-1" style={{scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9'}}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Organization"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason that you want to connect with us{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Tell us why you'd like to join..."
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
              <MessageCircle className="absolute bottom-3 right-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full h-11 font-semibold shadow-md transition-all hover:shadow-lg"
          >
            Reserve Your Spot
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterForm;
