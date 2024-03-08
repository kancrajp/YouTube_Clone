import React from "react";
import styled from "styled-components";
import YouTube from "../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import FeedIcon from "@mui/icons-material/Feed";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import ContrastIcon from "@mui/icons-material/Contrast";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100%;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 9px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-bottom: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YouTube} />
            YouTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscription
        </Item>{" "}
        <Hr />
        <Item>
          <LocalLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>{" "}
        <Hr />
        <Login>
          Sign In to like, subscribe and comment
          <Link to="login" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleIcon /> Sign In
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best of YouTube</Title>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBaseballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieFilterIcon />
          Movies
        </Item>
        <Item>
          <FeedIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>{" "}
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <FlagIcon />
          Report
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <ContrastIcon />
          {darkMode ? "Light" : "Dark"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
