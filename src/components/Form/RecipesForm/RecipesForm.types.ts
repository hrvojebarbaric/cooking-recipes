import { UseMutateFunction } from "@tanstack/react-query/build/lib/types"
import { NewRecipe, Recipe } from "../../../global.types"

export type RecipesFormProps = {
    mutate: UseMutateFunction<any, unknown, NewRecipe, unknown>;
    recipeId?: string;
    recipe?: Recipe;
    isLoading?: boolean;
    isError?: boolean;
} 