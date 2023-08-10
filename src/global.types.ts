export type User  = {
    id?: string;
    name: string;
    email: string;
    password?: string;
} | null

export type Recipe = {
    authorId: string;
    dateCreated?: string;
    id?: string;
    instructions: string[];
    tags: string[];
    title: string;
}

export type NewRecipe = {
    recipeId?: string;
    recipe: Recipe;
}