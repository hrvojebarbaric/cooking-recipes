import axios from "axios"
import { NewRecipe } from "../global.types"

const header = {
    headers: {
        'authid': process.env.REACT_APP_UID
    }
}

export const createRecipe = async (newRecipe: NewRecipe) => {
    const response = await axios.post(`https://addrecipe-zazjbx7nka-uc.a.run.app/`, { ...newRecipe }, header)
    return response.data
}

export const updateRecipe = async (newRecipe: NewRecipe) => {
    const response = await axios.patch(`https://editrecipe-zazjbx7nka-uc.a.run.app/`, { ...newRecipe }, header)
    return response.data
}

export const getAllRecipes = async () => {
    const response = await axios.get(`https://getrecipes-zazjbx7nka-uc.a.run.app/`, header)
    return response.data
}

export const getRecipe = async (id: string) => {
    const response: any = await axios.get(`https://getrecipe-zazjbx7nka-uc.a.run.app/?recipeId=${id}`, header)
    return response.data
}

export const deleteRecipe = async (id: string) => {
    const response = await axios.get(`https://deleterecipe-zazjbx7nka-uc.a.run.app/?recipeId=${id}`, header)
    return response.data
}