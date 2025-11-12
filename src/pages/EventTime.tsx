import { CalendarIcon, Clock } from "lucide-react";
import React, { useEffect, useState } from "react";

const EventTime = () => {
  const [date, setDate] = useState("");
  const [istTime, setIstTime] = useState("");
  const [usEtTime, setUsEtTime] = useState("");

  useEffect(() => {
    const eventDate = new Date("2025-11-26T23:00:00+05:30"); // 26 Nov 2025, 11:00 PM IST

    // Format date (26 Nov 2025)
    const formattedDate = eventDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    // Format IST time
    const formattedIst = eventDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });

    // Convert to US Eastern Time
    const formattedUsEt = eventDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/New_York",
    });

    setDate(formattedDate);
    setIstTime(formattedIst);
    setUsEtTime(formattedUsEt);
  }, []);

  return (
    <div className="flex justify-center items-center mb-5 mt-10">
        <div className="flex justify-evenly items-start w-full">
            <p className="flex text-gray-800 font-semibold mb-2">
                <CalendarIcon className="inline-block mr-2 mb-1 text-[#8549ec]" size={45} />
                <div className="flex justify-start items-start flex-col">
                    <div className="text-[20px] font-bold">November 26</div>
                    <div>Wednesday</div>
                </div>
            </p>
            <p className="flex text-gray-800 font-semibold mb-2">
                <Clock className="inline-block mr-2 mb-1 text-[#8549ec]" size={45} />
                <div className="flex space-x-5">
                    <div className="flex justify-start items-start flex-col">
                        <div className="text-[20px] font-bold uppercase">{istTime}</div>
                        <div>IST</div>
                    </div>
                    <div className="flex justify-start items-start flex-col">
                        <div className="text-[20px] font-bold uppercase">{usEtTime}</div>
                        <div>US ET</div>
                    </div>
                </div>
            </p>
        </div>
    </div>
  );
};

export default EventTime;
