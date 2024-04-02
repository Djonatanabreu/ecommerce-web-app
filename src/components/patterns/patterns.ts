"use client";

import { defaultTheme } from "@/styles";
import Link from "next/link";
import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "430px",
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

  @media ${device.tablet} {
  }
`;

export const CleanContainer = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
`;

export const Title = styled.h1((props) => ({
  margin: 0,
  padding: 0,
  fontWeight: 400,
}));

export const CleanBtnText = styled(Link)`
  text-decoration: none;
  font-size: ${defaultTheme.fonts.size["16"]};
  color: ${defaultTheme.text.dark};

  &:hover {
    text-decoration: underline;
  }
`;

export const Pattern = {
  HeaderContainer: styled.header`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 142px;
    gap: 0.5rem;
    justify-content: space-between;

    @media ${device.tablet} {
      height: 50%;
    }
  `,

  HorizontalLine: styled.hr`
    height: 0.5px;
    background-color: ${defaultTheme.secondary};
    opacity: 0.3;
  `,

  VerticalLine: styled.div`
    width: 1px;
    height: 385px;
    background-color: ${defaultTheme.secondary};
    opacity: 0.2;
  `,

  TopHeaderInfoContainer: styled.div`
    margin: 0;
    padding: 0 135px;
    display: flex;
    background-color: ${defaultTheme.secondary};
    align-items: center;
    justify-content: space-between;
    height: 48px;

    @media ${device.laptop} {
      padding: 0 10px;
    }
  `,

  TopHeaderInfoContentBox: styled.div`
    width: 100%;
    margin: 0;
    padding: 0 10px;
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    height: 48px;
    gap: 5px;
  `,

  Text: styled(CleanText)`
    font-size: 14px;
    color: ${defaultTheme.text.white};
    text-align: center;

    @media ${device.tablet} {
      max-width: 75%;
      font-size: 70%;
    }
  `,

  Heading: styled(CleanText)`
    font-size: ${defaultTheme.fonts.size["24"]};
    color: ${defaultTheme.heading};
    font-weight: 500;
    padding: 0 6px;
    text-align: center;
  `,

  LinkText: styled.a`
    margin: 0;
    padding: 0;
    color: ${defaultTheme.text.white};
    font-weight: 500;

    @media ${device.tablet} {
      font-size: 70%;
    }
  `,
};
