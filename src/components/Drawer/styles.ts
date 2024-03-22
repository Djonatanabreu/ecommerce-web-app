import styled from "styled-components";
import { CleanBtnText, device } from "../Patterns/patterns";

export const DrawerContainer = styled.div`
  height: 380px;
  display: flex;
  width: 365px;
  padding-left: 135px;

  @media ${device.tablet} {
    padding: 0;
    max-width: 50%;
  }
`;

export const DrawerContent = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  height: 100%;
  align-items: center;

  @media ${device.tablet} {
    padding-top: 20px;
    max-width: 100%;
    padding-left: 10px;
  }
`;

export const DrawerBtnLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
export const BtnLink = styled.li``;

export const DrawerBtnLink = styled(CleanBtnText)`
  text-align: start;
`;

export const DrawerOverlay = styled.div``;
