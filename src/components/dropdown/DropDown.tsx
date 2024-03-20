import { ReactNode } from "react";
import { Icon } from "../Icon/Icon";
import { CleanInlineContainer, Pattern } from "../patterns/patterns";

export const DropDown = ({ children }: { children: ReactNode }) => {
  return (
    <CleanInlineContainer>
      <Pattern.Text>{children}</Pattern.Text>
      <Icon name='ArrowDown' />
    </CleanInlineContainer>
  );
};
