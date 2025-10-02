import { Card, CardContent, Typography } from "@mui/material";

export default function WeatherIndexCard({ title, value }) {
  return (
    <Card className="shadow-md bg-blue-50">
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h6" className="font-bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
