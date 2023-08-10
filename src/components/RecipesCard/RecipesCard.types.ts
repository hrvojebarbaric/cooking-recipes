import { Recipe } from "../../global.types"

export type RecipesCardProps = {
    recipe: Recipe;
    myRef: (node?: Element | null | undefined) => void;
}