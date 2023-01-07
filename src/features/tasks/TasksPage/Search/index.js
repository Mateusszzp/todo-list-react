import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input/styled"
import  searchQueryParamsName  from "./searchQueryParamsName";
import { Wrapper } from "./styled";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search).get(searchQueryParamsName))

    const onInputchange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamsName);
        } else {
            searchParams.set(searchQueryParamsName, target.value)
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
    return (
        <Wrapper>
            <Input
                placeholder="filtruj zadania"
                value={query || ""}
                onChange={onInputchange} />
        </Wrapper>
    )
};
export default Search;