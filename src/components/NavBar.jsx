import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { DarkMode, SettingsEthernetOutlined } from "@mui/icons-material";

export const ModeButton = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.color ? "white" : ({ theme }) => theme.text_primary};
  margin-bottom: 20;
  text-decoration: none;
  cursor: pointer;
`;
export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) =>
    props.color ? "white" : ({ theme }) => theme.text_primary};
`;

const LinkNav = styled.a`
  /* color: ${({ theme }) => theme.text_primary} !important; */
  color: ${(props) =>
    props.color ? "white" : ({ theme }) => theme.text_primary} !important;
`;

const NavbarTextButton = styled.button`
  font-weight: 700;
  color: ${(props) =>
    props.color ? "white" : ({ theme }) => theme.text_primary};
  border: 1px solid
    ${(props) => (props.color ? "white" : ({ theme }) => theme.text_primary)};
  padding: 18px 34px;
  font-size: 18px;
  margin-left: 18px;
  position: relative;
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: ${(props) =>
      props.color ? "white" : ({ theme }) => theme.text_primary};
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    color: ${({ theme }) =>
      theme.mode === "darkTheme"
        ? "#121212"
        : (props) =>
            props.color ? ({ theme }) => theme.text_primary : "white"};
  }

  &:hover:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
const NavbarTextSpan = styled.span`
  z-index: 1;
`;
export const SocialIcon = styled.div`
  display: inline-block;
  margin-left: 14px;
  filter: ${(props) =>
    props.color
      ? ""
      : ({ theme }) =>
          theme.mode === "darkTheme" ? "invert(0%)" : "invert(100%)"};
  /* filter: invert(100%); */
`;
export const SocialIconA = styled.a`
  width: 42px;
  height: 42px;
  background: transparent;
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }
  &:hover::before {
    transform: scale(1);
  }
  &:hover img {
    filter: invert(100%);
  }
`;

export const SocialIconImg = styled.img`
  width: 40% !important;
  z-index: 1;
  transition: 0.3s ease-in-out;
`;

export const NavBar = ({ setDarkMode, darkMode }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <ModeButton color={scrolled}>
              <SettingsEthernetOutlined size="3rem" />{" "}
              <Span color={scrolled}>Portfolio</Span>
            </ModeButton>
          </Navbar.Brand>
          <ModeButton
            color={scrolled}
            onClick={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
          >
            <DarkMode />
          </ModeButton>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ paddingRight: "20px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkNav
                color={scrolled}
                href="#home"
                className={
                  activeLink === "home"
                    ? "nav-link active navbar-link"
                    : "nav-link navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </LinkNav>
              <LinkNav
                color={scrolled}
                href="#skills"
                className={
                  activeLink === "skills"
                    ? "nav-link active navbar-link"
                    : "nav-link navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </LinkNav>
              <LinkNav
                color={scrolled}
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "nav-link active navbar-link"
                    : "nav-link navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </LinkNav>
              <LinkNav
                color={scrolled}
                href="#education"
                className={
                  activeLink === "education"
                    ? "nav-link active navbar-link"
                    : "nav-link navbar-link"
                }
                onClick={() => onUpdateActiveLink("education")}
              >
                Education
              </LinkNav>
            </Nav>
            <span className="navbar-text">
              <SocialIcon color={scrolled}>
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
              <HashLink to="#connect">
                <NavbarTextButton color={scrolled}>
                  <NavbarTextSpan>Let’s Connect</NavbarTextSpan>
                </NavbarTextButton>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
