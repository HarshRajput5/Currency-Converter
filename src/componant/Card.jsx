import { Box, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFromCurrency, setToCurrency,setFromAmount,setToAmount } from "../features/currencySlice";

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

function Card({ title}) {
  const [currency, setCurrency] = useState("");
  const [allCurrency, setAllCurrency] = useState({});
  const { fromCurrency, toCurrency, fromAmount, toAmount } = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFromAmount(event.target.value);
  };

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    ) // API URL
      .then((response) => response.json()) // Convert response to JSON
      .then((json) => {
        setAllCurrency(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    ) // API URL
      .then((response) => response.json()) // Convert response to JSON
      .then((json) => {
        const amount = json[fromCurrency][toCurrency]*fromAmount;
        dispatch(setToAmount(amount));
        console.log("currency ", fromAmount);
        console.log("toAmount: ",amount)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [fromCurrency,fromAmount,toCurrency]);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: 3,
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
              {title=="fromCurrency"?"From":"To"}
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
              value={title == "fromCurrency" ? fromAmount : toAmount}
              onChange={title == "fromCurrency" ? (e)=>dispatch(setFromAmount(e.target.value)) : dispatch(setToAmount())}
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
                value={title == "fromCurrency" ? fromCurrency : toCurrency}
                label="Currency"
                onChange={(e) =>
                  title == "fromCurrency"
                    ? dispatch(setFromCurrency(e.target.value))
                    : dispatch(setToCurrency(e.target.value))
                }
              >
                {Object.entries(allCurrency).map(([key, value]) => (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Card;
