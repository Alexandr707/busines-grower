import { createContext, PropsWithChildren, useState } from "react";
import { Post, Profile } from "../../classes";
import * as data from '../../data'


export type AppContextType = {
    profile: Profile
    posts: Post[]
    update: React.Dispatch<React.SetStateAction<AppContextType>>

}


const defaultContext: AppContextType = {
    profile: data.profile,
    posts: data.posts,
    update: () => {}
}


export const AppContext = createContext(defaultContext)


export function AppContextProvider({children}: PropsWithChildren){
    const [s, setS] = useState(defaultContext)

    s.update = setS

    return (
        <AppContext.Provider value={s}>
            {children}
        </AppContext.Provider>
    )

}