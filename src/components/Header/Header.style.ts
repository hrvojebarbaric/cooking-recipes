import { styled } from "styled-components/macro"
import { sizes } from "../../global.styles"

export const HeaderStyled = styled.div`
    background-color: #ccc;
    min-height: 100px;
    display: flex;
    align-items: center;
    font-size: 1em;
    color: black;
    border-bottom: 1px solid black;
    padding: 0 20px;

    @media (max-width: ${sizes.tabletBreakPoint}) {
        flex-direction: column;
        padding: 20px;

        .auth-nav {
            display: flex;
            margin: auto;
        }
    }

    a,
    span {
        color: black;
        font-weight: 800;
        text-decoration: none;
        cursor: pointer;
        padding: 0 10px;
    }
    
    .logo {
        display: block;
        width: 80px;
        height: auto;
        margin: 0 10px;
    }

    .main-nav {
        ul {
            display: flex;

            li {
                list-style: none;
            }
        }
    }

    .auth-nav {
        display: flex;
        margin-left: auto;
    }
`