import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-secondary flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow p-8 md:p-12 max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 rounded-full p-4 animate-bounce">
            <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Registration Confirmed!
        </h1>
        <p className="text-gray-600 text-lg mb-2">
          Welcome to the AI Magic Rostering Masterclass
        </p>
        <p className="text-gray-500 text-sm mb-8">
          You're all set! You now have exclusive access to three pre-built AI agents. Get ready to build your first AI agent for free!
        </p>

        {/* Back to Homepage Button */}
        <button
          onClick={handleBackToHome}
          className="w-full bg-[#884cee] hover:bg-[#884cee] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
