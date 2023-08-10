import { FieldErrors } from "react-hook-form/dist/types/errors";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { Control, UseFormRegister } from "react-hook-form/dist/types/form";

export type InputArrayProps = {
    name: string;
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues, any>
    errors: FieldErrors<FieldValues>
}