import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import { deleteRecipe, getRecipe, updateRecipe } from "../../api/recipe"
import { Recipe } from "../../global.types"
import User from "../../components/User/User"
import RecipesForm from "../../components/Form/RecipesForm/RecipesForm"
import { useState } from "react"
import { RecipeDetailsStyled } from "./RecipeDetails.styles"
import Loader from "../../components/Loader/Loader"

const RecipeDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [isEditVisible, setIsEditVisible] = useState(false)

    const recipeQuery = useQuery({
        queryKey: ['recipes', params.id],
        queryFn: () => getRecipe(params.id || '0'),
    })

    const { mutate, isLoading, isError } = useMutation({
        mutationFn: updateRecipe,
        onSuccess: () => {
            navigate('/')
        }
    })

    const deleteUserMutation = useMutation({
        mutationFn: deleteRecipe,
        onSuccess: () => {
            navigate('/')
        }
    })

    const handleEdit = () => {
        setIsEditVisible(!isEditVisible)
    }

    const handleDelete = () => {
        deleteUserMutation.mutate(params.id || '0')
    }

    if (recipeQuery.isLoading || deleteUserMutation.isLoading) return <Loader />
    if (recipeQuery.isError || deleteUserMutation.isError) return <div>Something went wrong. Please contact your administrator.</div>

    const { title, dateCreated, authorId, instructions, tags }: Recipe = recipeQuery.data?.recipe

    const renderInstructions = instructions.map((instruction, key) => <li key={key}>{instruction}</li>)
    const renderTags = tags.map((tag, key) => {
        return key === 0 ? <label key={key}>{tag}</label> : <label key={key}>, {tag}</label>
    })

    return (
        <RecipeDetailsStyled>
            <div className="info-wrapper">
                <div>
                    <h1>{title}</h1>
                    <div>
                        <span>Created: </span> 
                        {dateCreated}
                    </div>
                    <div>
                        <span>Instructions: </span> 
                        <ol>{renderInstructions}</ol>
                    </div>
                    <div>
                        <span>Tags: </span> 
                        {renderTags}
                    </div>
                    <User id={authorId} />
                </div>
                <div className="buttons">
                    {!isEditVisible && <button onClick={handleEdit}>Edit</button>}
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            {isEditVisible &&
                <div className="form-wrapper">
                    <RecipesForm
                        mutate={mutate}
                        recipeId={params.id}
                        recipe={recipeQuery.data?.recipe}
                        isLoading={isLoading}
                        isError={isError}
                    />
                </div>}
        </RecipeDetailsStyled>

    )
}

export default RecipeDetails