import styled from "styled-components/macro"
import { sizes } from "../../global.styles"

export const HomeStyled = styled.div`
    .recipes-list {
        display: flex;
        flex-wrap: wrap;

        @media (max-width: ${sizes.mobileBreakPoint}) {
            display: block;
        }
    }

    .search-bar {
        margin: 10px 0.5% 10px;

        @media (max-width: ${sizes.mobileBreakPoint}) {
            display: flex;
            flex-direction: column;
        }

        input {
            @media (max-width: ${sizes.mobileBreakPoint}) {
                margin-top: 10px;
            } 
        }

        .dropdown {
            background-color: transparent;
            padding: 5px 10px;
            margin-left: 5px;

            @media (max-width: ${sizes.mobileBreakPoint}) {
                margin: 10px 0 0;
            }                
        }
    }
`