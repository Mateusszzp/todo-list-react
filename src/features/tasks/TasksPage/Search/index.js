import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamsName from "./searchQueryParamsName";
import { useQueryParameters, useReplaceQueryParameters } from "../../queryParameters";
import { Wrapper } from "./styled";
import Input from "../../Input/styled"

const Search = () => {
	const location = useLocation();
	const history = useHistory();
	const query = useQueryParameters();

	const onInputchange = ({ target }) => {
		const searchParams = new URLSearchParams(location.search);

		if (target.value.trim() === "" ? target.value : undefined) {

			searchParams.delete(searchQueryParamsName);
		} else {
			searchParams.set(searchQueryParamsName, target.value)
		}
		history.push(`${location.pathname}?${searchParams.toString()}`);
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