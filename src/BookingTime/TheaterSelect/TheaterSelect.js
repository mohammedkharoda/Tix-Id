import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export const TheaterSelect = () => {
  const [country, setCountry] = useState("");
  const [theater, setTheater] = useState("");
  const [Cinema, setCinema] = useState("");
  const [Place, setPlace] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleTheater = (event) => {
    setTheater(event.target.value);
  };

  const handleCinema = (event) => {
    setCinema(event.target.value);
  };

  const handlePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const selectSx = {
    marginTop: "24px",
    marginLeft: "66px",
    marginBottom: "32px",
  };
  const newSelectSx = {
    marginLeft: "42px",
  };

  const studioSx = {
    marginLeft: "42px",
  };

  return (
    <>
      <Box width="174px">
        <TextField
          label={`Select Location`}
          select
          value={country}
          fullWidth
          onChange={handleChange}
          sx={selectSx}
        >
          <MenuItem value="IN">
            <ListItemIcon>
              <LocationOnIcon />
              India
            </ListItemIcon>
          </MenuItem>
          <MenuItem value="US">
            <ListItemIcon>
              <LocationOnIcon />
              United State
            </ListItemIcon>
          </MenuItem>
          <MenuItem value="AU">
            <ListItemIcon>
              <LocationOnIcon /> Australia
            </ListItemIcon>
          </MenuItem>
        </TextField>
      </Box>
      <Box
        component="section"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "42px",
          paddingRight: "20px",
        }}
      >
        <Box width="342px">
          <TextField
            label={`Grand Canons`}
            select
            value={theater}
            fullWidth
            onChange={handleTheater}
            sx={newSelectSx}
          >
            <MenuItem value="The Roman Forum">The Roman Forum</MenuItem>
            <MenuItem value="Angkor Wat">Angkor Wat</MenuItem>
            <MenuItem value="Masai Mara">Masai Mara</MenuItem>
          </TextField>
        </Box>
        {/* Box-1 */}
        <Box width="90px">
          <TextField
            variant="standard"
            label={`Studio`}
            select
            value={Cinema}
            fullWidth
            onChange={handleCinema}
            sx={studioSx}
          >
            <MenuItem value="XXI">XXI</MenuItem>
            <MenuItem value="2D">2D</MenuItem>
            <MenuItem value="CGV">CGV</MenuItem>
            <MenuItem value="Gold Class 2D">GOLD CLASS 2D</MenuItem>
            <MenuItem value="Cineplois">CINEPOLIS</MenuItem>
            <MenuItem value="regular 2d">REGULAR 2D</MenuItem>
          </TextField>
        </Box>
        {/* Box-2 */}
        <Box width="90px">
          <TextField
            variant="standard"
            label={`Sortir`}
            select
            value={Cinema}
            fullWidth
            onChange={handlePlace}
            sx={studioSx}
          >
            <MenuItem value="Gold Class 2D">Terdekat</MenuItem>
            <MenuItem value="Cineplois">Harga Termurah </MenuItem>
            <MenuItem value="regular 2d">Alfabet</MenuItem>
          </TextField>
        </Box>
        {/* Box-3 */}
        <Box width="90px">
          <TextField
            variant="standard"
            label={`Category    `}
            select
            value={Cinema}
            fullWidth
            onChange={handleCategory}
            sx={studioSx}
          >
            <MenuItem value="Spotlight">Spotlight</MenuItem>
            <MenuItem value="News">News </MenuItem>
            <MenuItem value="Videos">Videos</MenuItem>
          </TextField>
        </Box>
      </Box>
    </>
  );
};

export default TheaterSelect;
