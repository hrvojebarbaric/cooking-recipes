import axios from "axios"
import { User } from "../global.types"

const header = {
    headers: {
        'authid': process.env.REACT_APP_UID
    }
}

export const getAllUsers = async () => {
    const response = await axios.get(`https://getappusers-zazjbx7nka-uc.a.run.app/`, header)
    return response.data
}

export const getUser = async (id: string) => {
    const response = await axios.get(`https://getappuser-zazjbx7nka-uc.a.run.app/?appUserId=${id}`, header)
    return response.data
}

export const deleteUser = async (id: string) => {
    const response = await axios.get(`https://deleteappuser-zazjbx7nka-uc.a.run.app/?appUserId=${id}`, header)
    return response.data
}

export const createUser = async (user: User) => {
    const response = await axios.post('https://addappuser-zazjbx7nka-uc.a.run.app/', { ...user }, header)
    return response.data
}

export const loginUser = async (user: User) => {
    const response = await axios.post('https://login-zazjbx7nka-uc.a.run.app/', { ...user }, header)
    return response.data
}