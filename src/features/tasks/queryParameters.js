import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamsName from "./TasksPage/Search/searchQueryParamsName";



export const useQueryParameters = () => {
    const location = useLocation()
    const loc = new URLSearchParams(location.search).get(searchQueryParamsName)

    return loc
}
export const useReplaceQueryParameters = (key, value,) => {
    const history = useHistory();
    const location = useLocation()

    const searchParams = new URLSearchParams(location.search);

value ? searchParams.delete(key) : searchParams.set(key,)

    
        
    
    history.push(`${location.pathname}?${searchParams.toString()}`);
return {key, value}
}




