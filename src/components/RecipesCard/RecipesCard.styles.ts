import styled from "styled-components/macro"
import { sizes } from "../../global.styles"

export const RecipesCardStyled = styled.div`
    width: 45%;
    margin: 0.5%;
    padding: 3% 1%;
    border: 1px solid #ccc;

    @media (max-width: ${sizes.mobileBreakPoint}) {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }

    h2,
    a {
        text-decoration: none;
        color: #333;
        margin: 10px 0;

        &:hover {
            color: #ccc;
        }
    }

    span {
        font-weight: 700;
    }
`