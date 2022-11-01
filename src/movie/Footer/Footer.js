/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box } from "@mui/material";
import TixLogo from "../../assets/tix id 1.svg";
import GooglePlay from "../../assets/Google Play.svg";
import AppStore from "../../assets/image 6.svg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <Box>
        <footer>
          <Box
            sx={{
              display: "grid",
              marginLeft: { sm: "25px", md: "25px", xs: "25px" },
              gridTemplateColumns: {
                lg: "repeat(5,1fr)",
                md: "repeat(5,1fr)",
                sm: "repeat(4,1fr)",
              },
              gridTemplateRows: "1fr",
              gridRowGap: "25px",
              gridColumnGap: "25px",
              marginTop: "26px",
            }}
          >
            <Box
              sx={{
                marginLeft: { lg: "28px", md: "28px" },
                marginRight: "auto",
              }}
            >
              <img src={TixLogo} alt="tix-logo" style={{ width: "100%" }} />
            </Box>

            <Box>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "35px",
                  color: "#333",
                }}
              >
                <p>Perusahaan</p>
              </Box>
              <ul
                style={{
                  listStyleType: "none",
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <li>
                  <a>Kontak Kami</a>
                </li>
                <li>
                  <a>Tentang</a>
                </li>
                <li>
                  <a>Partner</a>
                </li>
              </ul>
            </Box>

            <Box>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: { lg: "18px", md: "16px", sm: "14px" },
                  lineHeight: "35px",
                  color: "#333",
                }}
              >
                <p>Seputar</p>
              </Box>
              <ul
                style={{
                  listStyleType: "none",
                  marginTop: "15px",

                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <li>
                  <a>TIX ID News</a>
                </li>
                <li>
                  <a>Bioskop</a>
                </li>
                <li>
                  <a>Tiket Saya</a>
                </li>
                <li>
                  <a>Pembayaran</a>
                </li>
                <li>
                  <a>Cicilan</a>
                </li>
              </ul>
            </Box>
            <Box>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "35px",
                  color: "#333",
                }}
              >
                <p>Dukungan</p>
              </Box>
              <ul
                style={{
                  listStyleType: "none",
                  marginTop: "15px",

                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <li>
                  <a>Pusat Bantuan</a>
                </li>
                <li>
                  <a>Kebijakan Privasi</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Syarat dan Ketentuan</a>
                </li>
                <li>
                  <a>Update Covid-19</a>
                </li>
              </ul>
            </Box>

            <Box sx={{ marginRight: "25px" }}>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "35px",
                  color: "#333",
                }}
              >
                <p>Follow On Social Media</p>
              </Box>
              <ul>
                <Box
                  sx={{
                    width: "150px",
                    display: "flex",
                    listStyleType: "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <li>
                    <a>
                      <BsInstagram style={{ width: "20px", height: "20px" }} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <BsFacebook style={{ width: "20px", height: "20px" }} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <BsTwitter style={{ width: "20px", height: "20px" }} />
                    </a>
                  </li>
                </Box>
              </ul>

              <Box>
                <p style={{ marginBottom: "24px" }}>Download Aplikasi TIX ID</p>
                <div>
                  <img src={GooglePlay} alt="" />

                  <img src={AppStore} alt="" />
                </div>
              </Box>

              <Box sx={{ marginTop: "26px" }}>
                <p>2021 TIX ID - PT Nusantara Elang Sejahtera.</p>
              </Box>
            </Box>
          </Box>
        </footer>
      </Box>
    </>
  );
};

export default Footer;
