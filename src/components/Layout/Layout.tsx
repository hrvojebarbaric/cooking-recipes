import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import { LayoutStyled } from "./Layout.style"

const Layout = () => {
    return (
        <LayoutStyled>
            <Header />
            <main>
                <Outlet />
            </main>            
        </LayoutStyled>
    )
}

export default Layout