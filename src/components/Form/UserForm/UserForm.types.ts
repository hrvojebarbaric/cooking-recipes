import { UseMutateFunction } from "@tanstack/react-query"
import { User } from "../../../global.types"

export type UserFormProps = {
    mutate: UseMutateFunction<any, unknown, User, unknown>;
    isRegister: boolean;
} 