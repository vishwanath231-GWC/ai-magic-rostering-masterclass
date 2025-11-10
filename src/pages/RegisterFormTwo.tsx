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
import { Navigate, useNavigate } from "react-router-dom";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  organization: string;
  reason: string;
}

interface FormErrors {
  fullName: string;
  phone: string;
  email: string;
  organization: string;
  reason: string;
}

const RegisterFormTwo = ({ selectedChallenges }: any) => {
  const navigate = useNavigate();
  const SUPABASE_URL = "https://muxqrjyilrvgfxprxcfk.supabase.co";
  const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11eHFyanlpbHJ2Z2Z4cHJ4Y2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNTc2MjYsImV4cCI6MjA3NzgzMzYyNn0.dvR9jUnaDOuKlRDb7DO_Qgt7Ma7aMwggeHYif1pJvo0";

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    reason: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    reason: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (!name) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {
      fullName: "",
      phone: "",
      email: "",
      organization: "",
      reason: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required";
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Please tell us why you want to join";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    try {
      const submitData = {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        organization: formData.organization,
        selected_challenges: selectedChallenges || "None selected",
        reason: formData.reason,
        created_at: new Date().toISOString(),
      };

      // Insert data into Supabase using REST API
      const response = await fetch(`${SUPABASE_URL}/rest/v1/registrations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Supabase error:", error);
        alert("Error saving data. Please try again.");
        return;
      }

      navigate("/success");

      setIsOpen(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        organization: "",
        reason: "",
      });
      setErrors({
        fullName: "",
        phone: "",
        email: "",
        organization: "",
        reason: "",
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
          variant="secondary"
          className="group h-14 gap-2 px-8 md:text-lg text-md font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Register Now – Limited Seats Available
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
        <div
          className="space-y-4 overflow-y-auto px-1"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#cbd5e1 #f1f5f9" }}
        >
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.organization
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
              }`}
            />
            {errors.organization && (
              <p className="text-red-500 text-sm mt-1">{errors.organization}</p>
            )}
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
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition resize-none ${
                  errors.reason
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                }`}
              />
              <MessageCircle className="absolute bottom-3 right-3 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.reason && (
              <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
            )}
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

export default RegisterFormTwo;
