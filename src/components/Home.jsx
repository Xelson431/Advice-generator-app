import {
  Card,
  Stack,
  Box,
  CardContent,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import dice from "../assets/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import DividerDesktop from "../assets/pattern-divider-desktop.svg";
import DividerMobile from "../assets/pattern-divider-mobile.svg";
import { useTheme } from "@mui/material/styles";
export const Home = () => {
  const theme = useTheme(); // Access the theme

  const [data, setData] = useState({
    slip: { id: 14, advice: "" },
  });

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  console.log(data);

  return (
    <Paper style={{ backgroundColor: "#1f2632" }}>
      <Box
        display="flex"
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
        height="100vh"
      >
        <Stack
          sx={{
            margin: "5px",
            width: {
              xs: 300,
              lg: 800,
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              bgcolor: "secondary.dark",
              boxShadow: "0 4px 60px rgba(0, 0, 0, 0.2)",
              borderRadius: "16px",
            }}
            spacing={4}
          >
            <CardContent>
              <Stack
                padding={theme.padding.md}
                spacing={5}
                paddingBottom={5}
                direction="column"
              >
                <Typography
                  fontFamily="Manrope , sans-serif"
                  fontWeight="bold"
                  variant="p"
                  color="primary"
                >
                  A D V I C E #{data.slip.id}
                </Typography>
                <Typography
                  fontFamily="Manrope, , sans-serif"
                  fontWeight="bold"
                  variant="span"
                  margin={5}
                  fontSize={28}
                  color="secondary.main"
                >
                  "{data?.slip.advice}"
                </Typography>

                <img src={DividerMobile} />
              </Stack>
            </CardContent>
          </Card>

          <IconButton
            className="Button"
            aria-label=""
            sx={{ bgcolor: "primary.main" }}
            onClick={fetchAPI}
          >
            <img src={dice} />
          </IconButton>
        </Stack>
      </Box>
    </Paper>
  );
};

export default Home;
