import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {
  SocialIcon,
  SocialIconA,
  SocialIconImg,
  ModeButton,
  Span,
} from "./NavBar";
import { SettingsEthernetOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Copyright = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.copyright};
  letter-spacing: 0.5px;
  margin-top: 20px;
`;
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <ModeButton href="/">
              <SettingsEthernetOutlined size="3rem" /> <Span>Portfolio</Span>
            </ModeButton>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocialIcon>
              <SocialIconA
                href="https://dz.linkedin.com/in/diyaa-zehana-ab21091a7"
                target="_blank"
              >
                <SocialIconImg src={navIcon1} alt="" />
              </SocialIconA>
              <SocialIconA
                href="https://www.facebook.com/profile.php?id=100009818266006"
                target="_blank"
              >
                <SocialIconImg src={navIcon2} alt="" />
              </SocialIconA>
              <SocialIconA
                href="https://www.instagram.com/zehana_diyaa/"
                target="_blank"
              >
                <SocialIconImg src={navIcon3} alt="" />
              </SocialIconA>
            </SocialIcon>
            <Copyright>Copyright 2022. All Rights Reserved</Copyright>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
