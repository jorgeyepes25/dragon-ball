import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardHeader,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        width: 300,
        backgroundColor: "#3c3f41",
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&:hover img": {
          transform: "scale(1.1)",
        },
      }}
    >
      <CardHeader
        title={
          <Typography gutterBottom variant="h5" align="center" color="white">
            {character.name}
          </Typography>
        }
      />
      <Box sx={{ position: "relative", height: "400px" }}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{
            position: "absolute",
            top: "-20px",
            width: "100%",
            height: "100%",
            minHeight: "400px",
            maxHeight: "400px",
            margin: 0,
            objectFit: "contain",
            objectPosition: "center center",
            zIndex: 0,
            transition: "transform 0.6s",
          }}
        />
      </Box>
      <CardContent sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="body1" color="white">
          Raza: {character.race} - {character.gender}
        </Typography>
        <Typography variant="body1" color="white">
          KI Base : {character.ki}
        </Typography>
        <Typography variant="body1" color="yellow">
          Maximo KI: {character.maxKi}
        </Typography>
      </CardContent>
    </Card>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    race: PropTypes.string,
    ki: PropTypes.string,
    maxKi: PropTypes.string,
    affiliation: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
};

export default CharacterCard;
