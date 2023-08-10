import { ErrorMessage } from "@hookform/error-message"
import { InputProps } from "./Input.types"
import { forwardRef } from "react"

const Input = forwardRef((props: InputProps, ref) => {
    const { type, name, value, onChange, errors } = props

    const inputName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <>
            <div className="input-row">
            <span>{inputName}: </span> 
            <input
                type={type}
                id={name}
                value={value || ''}
                onChange={onChange}                
            />
            </div>
            <p className="error"><ErrorMessage errors={errors} name={name} /></p>
        </>
    )
})

export default Input