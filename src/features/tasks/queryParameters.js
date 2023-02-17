import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamsName from "./TasksPage/Search/searchQueryParamsName";



export const useQueryParameters = () => {
  const location = useLocation()
  const loc = new URLSearchParams(location.search).get(searchQueryParamsName)

  return loc
}
export const useReplaceQueryParameters = (value, key) => {
  const history = useHistory();
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);

  if (target.value.trim() === "" ? target.value : undefined) {

    searchParams.delete(key);
  } else {
    searchParams.set(key, target.value)
  }
  history.push(`${location.pathname}?${searchParams.toString()}`)

  return { value, key }

}


