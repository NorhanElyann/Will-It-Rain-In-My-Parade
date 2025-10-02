import { Card, CardContent, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RecommendationCard = ({ name, desc, time, image }) => {
  return (
    <Card className="shadow-sm !bg-[var(--primary-light)]">
      <CardContent className="flex justify-between items-center">
        <div className="flex-1">
          <Typography variant="body1" className="">
            {name}
          </Typography>
          <Typography variant="body2">{desc}</Typography>
          <Typography variant="caption">{time}</Typography>
        </div>
        <div className="flex flex-col items-end">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-md object-cover mb-1"
          />
          <IconButton size="small">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
