/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box } from "@mui/material";
import "./Footer.css";
import TixLogo from "../../assets/tix id 1.svg";
import GooglePlay from "../../assets/Google Play.svg";
import AppStore from "../../assets/image 6.svg";
const Footer = () => {
  return (
    <>
      <Box>
        <hr />
        <footer class="footer">
          <Box class="grid grid--5--cols">
            <Box class="logo-col">
              <img class="logo-footer" src={TixLogo} alt="" />
            </Box>

            <Box class="nav-col">
              <p class="footer-heading">Perusahaan</p>
              <ul class="footer-nav">
                <li>
                  <a class="footer-link" href="#">
                    Kontak Kami
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Tentang
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Partner
                  </a>
                </li>
              </ul>
            </Box>

            <Box class="nav-col">
              <p class="footer-heading">Seputar</p>
              <ul class="footer-nav">
                <li>
                  <a class="footer-link" href="#">
                    TIX ID News
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Bioskop
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Tiket Saya
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Pembayaran
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Cicilan
                  </a>
                </li>
              </ul>
            </Box>
            <Box class="nav-col">
              <p class="footer-heading">Dukungan</p>
              <ul class="footer-nav">
                <li>
                  <a class="footer-link" href="#">
                    Pusat Bantuan
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Update Covid-19
                  </a>
                </li>
              </ul>
            </Box>

            <Box class="nav-col">
              <p class="footer-heading">Follow On Social Media</p>
              <ul class="social-links">
                <li>
                  <a class="footer-link" href="#">
                    <ion-icon
                      class="social-icon"
                      name="logo-instagram"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    <ion-icon
                      class="social-icon"
                      name="logo-facebook"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    <ion-icon
                      class="social-icon"
                      name="logo-twitter"
                    ></ion-icon>
                  </a>
                </li>
              </ul>

              <Box class="media">
                <p class="download-text">Download Aplikasi TIX ID</p>
                <div class="download-info">
                  <img src={GooglePlay} alt="" class="media-logo" />

                  <img src={AppStore} alt="" class="media-logo" />
                </div>
              </Box>

              <Box class="copyright">
                <p class="copyright-text">
                  2021 TIX ID - PT Nusantara Elang Sejahtera.
                </p>
              </Box>
            </Box>
          </Box>
        </footer>
      </Box>
    </>
  );
};

export default Footer;
