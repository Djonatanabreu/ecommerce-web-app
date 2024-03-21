import { CleanBtnText, device } from "@/components/Patterns/patterns";
import styled from "styled-components";

export const NavMenuStyled = {
  Container: styled.nav`
    padding: 5px;
    display: flex;
    padding-inline: 135px;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 10px; */

    @media ${device.laptop} {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  `,

  ListOptions: styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 60px;

    @media ${device.laptop} {
      display: none;

      &.show {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #f5f5f5;
        padding: 1rem 2rem;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      }
    }
  `,

  Option: styled.li``,

  ButtonText: styled(CleanBtnText)``,
};

export const HeaderNavIconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
`;

export const HamburgerButton = styled.button`
  display: none;
`;

// @media ${device.laptop} {
//   /* Show on smaller screens */
//   display: block;
//   background: none;
//   border: none;
//   padding: 0;
//   cursor: pointer;

//   &:focus {
//     outline: none; /* Remove focus outline */
//   }

//   &::after,
//   &::before {
//     content: "";
//     display: block;
//     width: 25px;
//     height: 3px;
//     background-color: #333; /* Adjust bar color */
//     margin-bottom: 5px; /* Spacing between bars */
//   }

//   &::before {
//     transform: translateY(-10px); /* Position top bar */
//   }
// }
