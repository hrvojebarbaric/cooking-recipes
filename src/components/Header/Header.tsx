import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { HeaderStyled } from "./Header.style"
const logo = require("../../images/logo.png")

const Header = () => {
    const { user, setUser } = useAuth()

    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.clear()
        navigate('login')
        setUser(null)
    }

    return (
        <HeaderStyled>
            <img alt="logo" className="logo" src={logo} />
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes/create">Create recipe</Link></li>
                </ul>
            </nav>
            <div className="auth-nav">
                {user && <div>Welcome {user.name}!</div>}
                {user ? <span onClick={() => handleLogOut()}>Log out</span> : <Link to="/register">Register</Link>}
            </div>
        </HeaderStyled>
    )
}

export default Header