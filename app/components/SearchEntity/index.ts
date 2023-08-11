import { useFetcher } from "react-router-dom";
import { SearchInput } from "./SearchInput";

export function useSearchEntity<T>() {
  const fetcher = useFetcher<T[]>();

  return {
    fetcher,
  };
}

export { SearchInput };
