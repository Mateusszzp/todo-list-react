import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamsName from "./TasksPage/Search/searchQueryParamsName";



export const useQueryParameters = () => {
  const location = useLocation();
  const loc = new URLSearchParams(location.search).get(searchQueryParamsName)

  return loc
}
export const useReplaceQueryParameters = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  return ({value, key}) => {
    if (value) {

      searchParams.delete(key);
    } else {
      searchParams.set(key,value)
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  }
  

};




