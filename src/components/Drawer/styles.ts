import styled from "styled-components";
import { CleanBtnText, device } from "../Patterns/patterns";
import { Icon } from "../Icon/Icon";

export const DrawerContainer = styled.div<{
  width?: string;
  paddingLeft?: string;
}>`
  height: 385px;

  display: flex;
  max-width: 356px;
  /* min-width: 200px; */
  width: ${(props) => props.width};
  padding-left: ${(props) => props.paddingLeft};

  @media ${device.laptopL} {
    padding-left: ${(props) => props.paddingLeft};
  }
  @media ${device.tablet} {
    padding: 0;
    padding-left: 10px;
    width: ${(props) => (props.width ? "55vw" : "15vw")};
  }
`;

export const DrawerContent = styled.div<{ display?: string }>`
  display: ${(props) => props.display || "none"};
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  height: 100%;
  align-items: center;

  @media ${device.tablet} {
    padding-top: 20px;
  }
`;

export const DrawerBtnLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
export const BtnLink = styled.li`
  @media ${device.mobileL} {
    width: 40vw;
  }
`;

export const DrawerBtnLink = styled(CleanBtnText)`
  text-align: start;
`;

export const DrawerBurguerIcon = styled(Icon)`
  margin: 5px;
`;

export const DrawerOverlay = styled.div``;
