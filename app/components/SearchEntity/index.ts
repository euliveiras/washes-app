import { useForm } from "react-hook-form";
import { useFetcher } from "react-router-dom";
import type { Inputs } from "../NewWashModal/Modal";
import { SearchInput } from "./SearchInput";

export function useSearchEntity<T>() {
  const fetcher = useFetcher<T[]>();
  const useFormProps = useForm<Inputs>();

  return {
    fetcher,
    useFormProps,
  };
}

export { SearchInput };
