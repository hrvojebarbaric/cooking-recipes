import { createContext, useContext, useEffect, useState } from "react"
import { User } from "../global.types"

const AuthContext = createContext<any>(null)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState<User>(null)

    useEffect(() => {
        if (!user) {
            const localUser = JSON.parse(localStorage.getItem('user') as string)
            localUser && setUser(localUser)
        }
    })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}