import { AppContextType } from "./AppContextProvider";
import { useAppContext } from "./useAppContext";

export function useAppContextValue<T extends keyof AppContextType>(key: T): AppContextType[T]{
    const s = useAppContext()
    return s[key]
}