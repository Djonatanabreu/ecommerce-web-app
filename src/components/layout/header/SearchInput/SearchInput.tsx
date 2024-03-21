import { Input, SearchIcon, StyledInput } from "./styles";

export const SearchInput = () => {
  return (
    <StyledInput>
      <Input>
        <input placeholder='What are you looking for?' />
        <SearchIcon name='MagnifyingGlass' />
      </Input>
    </StyledInput>
  );
};
