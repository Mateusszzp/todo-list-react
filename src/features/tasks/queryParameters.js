import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamsName from "./TasksPage/Search/searchQueryParamsName";

export const useQueryParameters = key => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  return searchParams.get(key);
};

export const useReplaceQueryParameters = () => {
  const history = useHistory();
  const location = useLocation();

  return ({ value, key }) => {
    const searchParams = new URLSearchParams(location.search);

    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value)
    }
    const newSearch = searchParams.toString();
    history.push(`${location.pathname}?${newSearch}`);
  }
};




