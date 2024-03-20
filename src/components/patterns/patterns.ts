"use client";

import { defaultTheme } from "@/styles";
import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const CleanText = styled.p((props) => ({
  margin: 0,
  padding: 0,
}));

export const CleanInlineContainer = styled.div`
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* margin-left: 220px; */

  @media ${device.tablet} {
    /* margin-left: 0; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export const Title = styled.h1((props) => ({
  margin: 0,
  padding: 0,
  fontWeight: 400,
}));

export const Pattern = {
  Header: styled.header`
    margin: 0;
    padding: 0 90px;
    display: flex;
    background-color: ${defaultTheme.secondary};
    align-items: center;
    justify-content: space-between;
    flex: 1;
    height: 48px;

    @media ${device.tablet} {
      margin-right: 0;
      padding: 0 10px;
    }
  `,

  HeaderContainer: styled.div`
    width: 100%;
    margin: 0;
    padding: 0 10px;
    display: flex;
    background-color: ${defaultTheme.secondary};
    align-items: center;
    justify-content: center;
    height: 48px;
    gap: 5px;
  `,

  Text: styled(CleanText)`
    font-size: 14px;
    color: ${defaultTheme.text};
    text-align: center;

    @media ${device.tablet} {
      max-width: 75%;
      font-size: 70%;
    }
  `,

  LinkText: styled.a`
    margin: 0;
    padding: 0;
    color: ${defaultTheme.text};
    font-weight: 500;

    @media ${device.tablet} {
      font-size: 70%;
    }
  `,
};
