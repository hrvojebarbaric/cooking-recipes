import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { createRecipe } from "../../api/recipe"
import RecipesForm from "../../components/Form/RecipesForm/RecipesForm"
import { CreateRecipeStyled } from "./CreateRecipe.styles"
import Loader from "../../components/Loader/Loader"

const CreateRecipe = () => {
    const navigate = useNavigate()

    const { mutate, isLoading, isError } = useMutation({
        mutationFn: createRecipe,
        onSuccess: () => {
            navigate('/')
        }
    })

    if (isLoading) return <Loader />
    if (isError) return <div>Something went wrong. Please contact your administrator.</div>

    return (
        <CreateRecipeStyled>
            <h1>Create recipe</h1>
            <RecipesForm mutate={mutate} />
        </CreateRecipeStyled>
    )
}

export default CreateRecipe