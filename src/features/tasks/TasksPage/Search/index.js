import searchQueryParamsName from "./searchQueryParamsName";
import { useQueryParameters, useReplaceQueryParameters } from "../../queryParameters";
import { Wrapper } from "./styled";
import Input from "../../Input/styled"

const Search = () => {

  const query = useQueryParameters(searchQueryParamsName);
  const replaceQueryParameters = useReplaceQueryParameters();

  const onInputchange = ({ target }) => {
    replaceQueryParameters({
      key: searchQueryParamsName,
      value: target.value.trim() !== ""
        ? target.value
        : undefined,
    })
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filter zadań"
        value={query || ""}
        onChange={onInputchange} />
    </Wrapper>
  )
};
export default Search;