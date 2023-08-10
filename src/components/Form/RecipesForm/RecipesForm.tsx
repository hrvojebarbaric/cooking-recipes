import { useForm, FieldValues, Controller } from "react-hook-form"
import { useAuth } from "../../../context/AuthContext"
import Input from "../Input/Input"
import InputArray from "../InputArray/InputArray"
import { RecipesFormProps } from "./RecipesForm.types"
import { useEffect } from "react"
import { RecipesFormStyled } from "./RecipesForm.styles"
import Loader from "../../Loader/Loader"

const RecipesForm = (props: RecipesFormProps) => {
    const { mutate, recipeId, recipe, isError, isLoading } = props
    const { user } = useAuth()

    const { register, control, formState: { errors }, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (recipeId) {
            setValue('title', recipe?.title)
            setValue('instructions', recipe?.instructions)
            setValue('tags', recipe?.tags)
        }
    }, [])

    const onSubmit = async (data: FieldValues) => {
        const { title, instructions, tags } = data
        mutate({
            recipeId: recipeId,
            recipe: {
                title: title,
                dateCreated: new Date().toLocaleDateString('en-CA'),
                authorId: user.id,
                instructions: instructions,
                tags: tags
            }
        })
    };

    if (isLoading) return <Loader />
    if (isError) return <div>Something went wrong. Please contact your administrator.</div>

    return (
        <RecipesFormStyled>
            <h2>{recipeId ? 'Edit' : 'Add new'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: '*Title is required.' }}
                    render={({ field }) => <Input type="text" errors={errors} {...field} />}
                />
                <div>
                    <InputArray control={control} register={register} errors={errors} name="instructions" />
                    <InputArray control={control} register={register} errors={errors} name="tags" />
                </div>
                <button type="submit">{recipeId ? 'Update recipe' : 'Create recipe'}</button>
            </form>
        </RecipesFormStyled>
    )
}

export default RecipesForm