import { Box, Button, Typography } from "@mui/material";
import bgImage from "./assets/background.jpg";
import "./App.css";
// import Stack from "@mui/material/Stack";
import Card from "./componant/Card";

function App() {
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
          <Card />
          <Card />
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: 70,
              borderRadius: 3,
              textTransform: "none", // Prevents uppercase text
              fontSize: "20px", // Optional: Adjust font size
            }}
          >
            Convert USD to INR
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
