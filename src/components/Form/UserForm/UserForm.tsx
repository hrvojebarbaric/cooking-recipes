import { Controller, FieldValues, useForm } from "react-hook-form"
import { UserFormProps } from "./UserForm.types"
import Input from "../Input/Input"
import { rules } from "./validateRules"
import { UserFormStyled } from "./UserForm.styles"

const UserForm = (props: UserFormProps) => {
    const { mutate, isRegister } = props
    const { control, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = async (data: FieldValues) => {
        const { name, email, password } = data
        mutate({ name, email, password })
    };

    return (
        <UserFormStyled>            
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{isRegister ? 'Register' : 'Login'}</h2>
                {isRegister &&
                <div className="form-row">
                    <Controller
                        name="name"
                        control={control}
                        rules={rules.name}
                        render={({ field }) => <Input type="text" errors={errors} {...field} />}
                    />
                </div>                    
                }
                <div className="form-row">
                    <Controller
                        name="email"
                        control={control}
                        rules={rules.email}
                        render={({ field }) => <Input type="text" errors={errors} {...field} />}
                    />
                </div>
                <div className="form-row">
                    <Controller
                        name="password"
                        control={control}
                        rules={rules.password}
                        render={({ field }) => <Input type="password" errors={errors} {...field} />
                        }
                    />
                </div>                
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
        </UserFormStyled>
    )
}

export default UserForm