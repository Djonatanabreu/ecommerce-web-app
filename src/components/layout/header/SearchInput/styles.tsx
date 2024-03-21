import { Icon } from "@/components/Icon/Icon";
import { defaultTheme } from "@/styles";
import styled from "styled-components";

export const StyledInput = styled.div`
  background-color: #f5f5f5;
  width: 240px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 0 12px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  &:focus-within {
    border-color: #000;
  }
`;

export const Input = styled.div`
  align-items: center;
  justify-content: space-between;
  flex: 1;
  position: relative;
  display: flex;
  input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.5px;
    &::placeholder {
      color: ${defaultTheme.text.dark};
      opacity: 0.5;
    }
  }
`;

export const SearchIcon = styled(Icon)``;
