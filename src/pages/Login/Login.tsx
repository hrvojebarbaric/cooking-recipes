import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import UserForm from "../../components/Form/UserForm/UserForm"
import { loginUser } from "../../api/users"
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react"
import Loader from "../../components/Loader/Loader"
import { LoginStyled } from "./Login.styles"

const Login = () => {
    const navigate = useNavigate()
    const { setUser } = useAuth()

    const { mutate, isLoading, isError, data, isSuccess } = useMutation({
        mutationFn: loginUser,
    })

    useEffect(() => {
        if (isSuccess) {
            const loggedUser = JSON.stringify(data.appUser)
            localStorage.setItem('user', loggedUser)
            setUser(data.appUser)
            navigate('/')
        }
    }, [isSuccess])

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user') as string)
        localUser && navigate('/')
    }, [])

    if (isLoading) return <Loader />
    if (isError) return <div>Something went wrong. Please contact your administrator.</div>

    return (
        <LoginStyled>
            <UserForm isRegister={false} mutate={mutate} />
            {data?.message}
        </LoginStyled>
    )
}

export default Login