import { useFieldArray } from "react-hook-form"
import { InputArrayProps } from "./InputArray.types"
import { InputArrayStyled } from "./InputArray.styles";

const InputArray = (props: InputArrayProps) => {
    const { register, control, errors, name } = props

    const { fields, append, prepend, remove } = useFieldArray({
        name: name,
        control,
        rules: {
            required: '*Please append at least 1 item'
        }
    });

    const arrayError = errors[name]?.root?.message?.toString()
    const inputName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <InputArrayStyled>
            <span className="title">{inputName}: </span>
            {fields.map((field, index) => {
                return (
                    <section key={field.id}>
                        <div>
                            <span>Name: </span>
                            <input placeholder={`Add new ${name}`} {...register(`${name}.${index}`, { required: true })} />
                        </div>
                        <button onClick={() => remove(index)}>
                            Delete
                        </button>
                    </section>
                );
            })}
            <div className="error">{arrayError}</div>
            <button onClick={() => { append('') }}>
                Append
            </button>
            <button onClick={() => { prepend('') }}>
                Prepend
            </button>
        </InputArrayStyled>
    )
}

export default InputArray