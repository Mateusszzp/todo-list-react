import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamsName from "./TasksPage/Search/searchQueryParamsName";

const useQueryParameters = () => {
    const location = useLocation()
const dupa = new URLSearchParams(location.search).get(searchQueryParamsName)

}

export default useQueryParameters
    
   
   

