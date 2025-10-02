import weatherData from "../../data/weatherData.json";
import WeatherIndices from "../../components/weatherexpectations/WeatherIndices";
import WeatherProbabilityCurves from "../../components/weatherexpectations/WeatherProbabilityCurves";
import CalendarSection from "../../components/weatherexpectations/CalendarSection";
import { useDate } from "../../context/context";
import { useLocation } from "../../context/context";

export default function WeatherExpectaions() {
  const { selectedDate, setSelectedDate } = useDate();
  const { selectedLocation } = useLocation();

  const formattedDate = selectedDate;

  const futureDate = new Date(selectedDate);
  futureDate.setDate(futureDate.getDate() + 7);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const displayDate = new Date(selectedDate).toLocaleDateString(
    "en-GB",
    options
  );
  const displayFutureDate = futureDate.toLocaleDateString("en-GB", options);

  const dailyData =
    weatherData.daily[formattedDate] || weatherData.daily["2025-10-01"];
  const weeklyData =
    weatherData.weekly[formattedDate] || weatherData.weekly["2025-10-01"];

  return (
    <div className="p-6">
      <div className="flex  justify-between">
        <div>
          <h1>Weather Insights for {selectedLocation?.label}</h1>

          <p className="text-gray-600 my-2">
            From <span className="font-semibold">{displayDate}</span> to{" "}
            <span className="font-semibold">{displayFutureDate}</span>
          </p>
        </div>
        <CalendarSection
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </div>
      <WeatherIndices data={dailyData} />
      <WeatherProbabilityCurves weeklyData={weeklyData} />
    </div>
  );
}
