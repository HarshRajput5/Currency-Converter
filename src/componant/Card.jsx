import { Box, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Card() {
  const [currency, setCurrency] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: 3,
        // margin:1
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          margin: 1,
          paddingRight: 3,
          pb: 1,
          pt: 1,
        }}
      >
        <Grid size={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%", // Ensures it takes full width
              padding: "10px", // Optional padding
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              From
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Currency Type
            </Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%", // Ensures it takes full width
              padding: "10px", // Optional padding
            }}
          >
            <TextField
              variant="standard"
              placeholder="0"
              sx={{
                
                "& .MuiInputBase-root": {
                    borderBottom: "none", // Remove bottom border
                  },
                  "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                    borderBottom: "none !important", // Remove underline (default & focus)
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none !important", // Remove hover underline
                  },
              }}
            />
            <FormControl
              sx={{
                width: 110,
              }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                label="Currency"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Card;
