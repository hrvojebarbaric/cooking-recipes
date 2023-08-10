export const rules = {
    name: {
        required: '*Name is required.',
        validate: {
            minLength: (input: string) => input.length <= 50 || '*The name should have max 50 characters',
        }
    },
    email: {
        required: '*Email is required.',
        validate: {
            maxLength: (input: string) => input.length <= 50 || '*The email should have at most 50 characters',
            matchPattern: (input: string) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input) ||
                "Email address must be a valid",
        }
    },
    password: {
        required: '*Password is required.',
        validate: {
            matchPattern: (input: string) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(input)
                || '*Password should contain at least one lowercase letter, uppercase letter, number and special character',
        }
    }
}