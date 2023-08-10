import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../api/users"
import { UserProps } from "./User.types"
import Loader from "../Loader/Loader"

const User = ({ id }: UserProps) => {
    const userQuery = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUser(id),
    })

    if (userQuery.isLoading) return <Loader />
    if (userQuery.isError) return <div>Something went wrong. Please contact your administrator.</div>

    return (
        <div>
            <span>Author: </span>
            {userQuery.data.appUser.name}
        </div>
    )
}

export default User