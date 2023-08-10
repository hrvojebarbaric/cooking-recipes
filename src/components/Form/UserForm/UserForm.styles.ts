import { styled } from "styled-components/macro";

export const UserFormStyled = styled.div`
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 50px 50px 50px;
        border: 1px solid #ccc;

        h2 {
            text-align: center;
        }

        button {
            width: 50%;
            margin: 20px auto 0;
        }

        .error {
            font-size: small;
            margin-top: 5px;
            text-align: right;
        }

        .form-row {
            width: 100%;

            .input-row {
                display: flex;
                justify-content: space-between;

                span {
                    display: block;
                    width: 40%;
                    text-align: right;
                    margin-right: 5px;
                }
                input {
                    display: block;
                    width: 60%;
                }
            }
        }
    }
`