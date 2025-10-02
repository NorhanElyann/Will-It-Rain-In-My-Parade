import { useState } from "react";
import DatePickerBar from "../../components/dashboard/DatePickerBar";
import { generateDates } from "../../utils/dateUtils";
import Map from "../../components/dashboard/Map";
import EventForm from "../../components/dashboard/EventForm";
import WeatherChart from "../../components/dashboard/WeatherChart";
import WeatherSummaryCard from "../../components/dashboard/WeatherSummaryCard";
import RecommendationCard from "../../components/dashboard/RecommendationCard";
import { Typography } from "@mui/material";
import { useDate } from "../../context/context";
import { useLocation } from "../../context/context";

const dates = generateDates(2015, 2025);

const Dashboard = () => {
  const recommendations = [
    {
      name: "Stanley Beach",
      desc: "Cooler temperatures (26–28°C), less crowded, great for a swim",
      time: "Today (8–11 AM), Bring sunscreen",
      image: "/stanley.jpg",
    },
    {
      name: "Mandara Beach",
      desc: "Golden light, family-friendly, breezy",
      time: "Afternoon (3–6 PM)",
      image: "/mandara.jpg",
    },
    {
      name: "Agami Beach",
      desc: "Spacious, quieter than city beaches",
      time: "Weekend mornings",
      image: "/agami.jpg",
    },
  ];

  const { selectedDate, setSelectedDate } = useDate();
  const { selectedLocation, setSelectedLocation } = useLocation();
  const [eventType, setEventType] = useState("Driving");

  const handleSubmit = () => {
    console.log("Event:", eventType);
    console.log("Date:", selectedDate);
    console.log("Location:", selectedLocation);
    alert(
      `Check weather for:\nEvent: ${eventType}\nDate: ${selectedDate}\nLocation: ${selectedLocation?.label}`
    );
  };

  return (
    <div className="grid grid-cols-12 gap-8 p-6">
      <div className="col-span-9 space-y-6">
        <DatePickerBar
          dates={dates}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />

        <Map onLocationSelected={setSelectedLocation} />

        <EventForm
          eventType={eventType}
          onEventTypeChange={setEventType}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          selectedLocation={selectedLocation}
          onSubmit={handleSubmit}
        />

        <WeatherChart selectedLocation={selectedLocation} />
      </div>
      <div className="col-span-3 space-y-6">
        <WeatherSummaryCard
          selectedLocation={selectedLocation}
          selectedDate={selectedDate}
          outlook="Mild with low rainfall risk"
          forecast={{ temp: 28, condition: "Mostly Clear Skies" }}
        />

        {/* Recommendations */}
        <div>
          <Typography variant="subtitle1" className="font-semibold mb-2">
            Recommendations For You <br />
            <span className="text-green-600 text-sm">
              (New {recommendations.length})
            </span>
          </Typography>
          <div className="space-y-2">
            {recommendations.map((rec, i) => (
              <RecommendationCard key={i} {...rec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
