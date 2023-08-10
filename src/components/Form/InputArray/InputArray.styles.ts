import styled from "styled-components/macro"
import { sizes } from "../../../global.styles"

export const InputArrayStyled = styled.div`
    margin: 1% 0 1%;
    padding: 1%;
    border: 1px solid #ccc;
    width: 50%;

    @media (max-width: ${sizes.tabletBreakPoint}) {
        width: 100%;
        padding: 10px;
    }
    
    .title {
        font-weight: 600;
        font-size: large;
        margin-bottom: 10px;
        display: block;
    }

    section {
        display: flex;
        align-items: center;

        button {
            margin: 5px;            
        }
    }    
`