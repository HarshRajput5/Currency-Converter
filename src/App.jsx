import { Box, Button, Typography } from "@mui/material";
import bgImage from "./assets/background.jpg";
import "./App.css";
import Card from "./componant/Card";
import { useSelector } from "react-redux";

function App() {

  const {fromCurrency,toCurrency} = useSelector((state) => state.currency);

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          p: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            background: "rgba(247, 245, 245, 0.6)", // Semi-transparent overlay
            padding: "20px",
            width: "50%",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Card title={"fromCurrency"}/>
          <Card title={"toCurrency"}/>
          <Button
            variant="contained"
            fullWidth
            onClick={submit}
            sx={{
              height: 70,
              borderRadius: 3,
              textTransform: "none", // Prevents uppercase text
              fontSize: "20px", // Optional: Adjust font size
            }}
          >
            Convert {fromCurrency} to {toCurrency}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
