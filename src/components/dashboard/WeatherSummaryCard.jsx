import { Card, CardContent, Typography, IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const WeatherSummaryCard = ({
  selectedLocation,
  selectedDate,
  outlook,
  forecast,
}) => {
  return (
    <div className="space-y-4">
      {/* Title */}
      <Typography variant="h6" className="font-semibold text-center">
        Will it rain in my parade?
      </Typography>

      {/* Location + Date */}
      <div className="flex justify-between p-3 rounded-xl shadow-md bg-[var(--primary-light)]">
        <div>
          <Typography variant="caption" color="text.secondary">
            Location
          </Typography>
          <Typography variant="body1" className="max-w-[200px] break-words">
            {selectedLocation?.label || "Choose on map"}
          </Typography>
        </div>
        <div className="text-right">
          <Typography variant="caption" color="text.secondary">
            Selected Date
          </Typography>
          <Typography variant="body1">{selectedDate}</Typography>
        </div>
      </div>

      {/* Seasonal Outlook */}
      <Card className="shadow-md !bg-[var(--primary-light)]">
        <CardContent className="flex justify-between items-center">
          <div>
            <Typography variant="caption" color="text.secondary">
              Seasonal Outlook
            </Typography>
            <Typography variant="body1">{outlook}</Typography>
          </div>
          <IconButton size="small">
            <ArrowDropDownIcon />
          </IconButton>
        </CardContent>
      </Card>

      {/* Weather Forecast */}
      <Card className="shadow-md !bg-[var(--primary-light)]">
        <CardContent className="flex justify-between items-center">
          <div>
            <Typography variant="caption" color="text.secondary">
              Weather Forecast
            </Typography>
            <Typography variant="body1">{forecast.temp}°C</Typography>
            <Typography variant="body1">{forecast.condition}</Typography>
          </div>
          <WbSunnyIcon className="text-yellow-500" fontSize="large" />
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherSummaryCard;
