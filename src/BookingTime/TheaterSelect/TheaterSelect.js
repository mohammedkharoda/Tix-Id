import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { locationData } from "../../movie/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slotActions } from "../../components/Slices/ticketShow";
export const TheaterSelect = () => {
  const [country, setCountry] = useState("");
  const [theater, setTheater] = useState("");
  const [Cinema, setCinema] = useState("");
  const [Badge, setBadge] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event, theaterLocation) => {
    setCountry(event.target.value);
    dispatch(slotActions.selectedShow({ theaterLocation }));
  };

  const handleTheater = (event) => {
    setTheater(event.target.value);
  };

  const handleCinema = (event) => {
    setCinema(event.target.value);
  };

  const handleBadge = (event) => {
    setBadge(event.target.value);
  };

  const selectSx = {
    marginTop: "24px",
    marginLeft: "66px",
    marginBottom: "32px",
  };
  const newSelectSx = {
    marginLeft: "65px",
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
          {locationData.map((loc) => (
            <MenuItem value={loc.locationId}>
              <ListItemIcon>
                <LocationOnIcon />
                {loc.locationName}
              </ListItemIcon>
            </MenuItem>
          ))}
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
        <Box width="150px">
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

        {/* Box-3 */}
        <Box width="90px" x>
          <TextField
            variant="standard"
            label={`Category`}
            select
            value={Badge}
            fullWidth
            onChange={handleBadge}
            sx={studioSx}
          >
            <MenuItem value="CGV">CGV</MenuItem>
            <MenuItem value="PVR">PVR </MenuItem>
          </TextField>
        </Box>
      </Box>
    </>
  );
};

export default TheaterSelect;
