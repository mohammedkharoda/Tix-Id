import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../movie/Navbar/Navbar";
const MovieBook = () => {
  const { id } = useParams();

  return (
    <>
      <Box component="section" sx={{ marginTop: "24px" }}>
        <Navbar />
      </Box>
      <Box component="section" sx={{ marginTop: "100px", marginLeft: "72px" }}>
        <Box>
          <Typography variant="h5">Select Date</Typography>
          <Typography>
            Lorem ipsum dolor sit amet. Et dolorum libero eos enim tempora aut
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              gap: "24px",
            }}
          >
            {/* Box-1 */}
            <Box
              component="div"
              sx={{
                padding: "18px",
                border: "1px solid #5A637A",
                width: "86px",
                height: "82px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#5A637A",
                }}
              >
                15 Aug
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "20px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                mon
              </Typography>
            </Box>
            {/* Box-2 */}
            <Box
              component="div"
              sx={{
                padding: "18px",
                border: "1px solid #5A637A",
                width: "86px",
                height: "82px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#5A637A",
                }}
              >
                16 Aug
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "20px",
                  color: "#333",
                }}
              >
                Tue
              </Typography>
            </Box>
            {/* box-3 */}
            <Box
              component="div"
              sx={{
                padding: "18px",
                border: "1px solid #5A637A",
                width: "86px",
                height: "82px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#5A637A",
                }}
              >
                15 Aug
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "20px",
                  color: "#333",
                }}
              >
                mon
              </Typography>
            </Box>
            {/* Box-4 */}
            <Box
              component="div"
              sx={{
                padding: "18px",
                border: "1px solid #5A637A",
                width: "86px",
                height: "82px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#5A637A",
                }}
              >
                15 Aug
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "20px",
                  color: "#333",
                }}
              >
                mon
              </Typography>
            </Box>
            {/* Box-5 */}
            <Box
              component="div"
              sx={{
                padding: "18px",
                border: "1px solid #5A637A",
                width: "86px",
                height: "82px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#5A637A",
                }}
              >
                15 Aug
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "20px",
                  color: "#333",
                }}
              >
                mon
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MovieBook;
