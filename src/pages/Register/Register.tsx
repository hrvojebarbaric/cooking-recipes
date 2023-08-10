import { useMutation } from "@tanstack/react-query"
import { createUser } from "../../api/users"
import { useNavigate } from "react-router-dom"
import UserForm from "../../components/Form/UserForm/UserForm"
import Loader from "../../components/Loader/Loader"
import { RegisterStyled } from "./Register.styles"

const Register = () => {
    const navigate = useNavigate()

    const { mutate, isLoading, isError } = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            navigate('/login')
        }
    })

    if (isLoading) return <Loader />
    if (isError) return <div>Something went wrong. Please contact your administrator.</div>

    return (
        <RegisterStyled>
            <UserForm isRegister={true} mutate={mutate} />
        </RegisterStyled>
    )
}

export default Register