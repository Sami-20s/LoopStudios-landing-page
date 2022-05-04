import styled from "styled-components";
import { media } from "./screenSize";

export const HeroStyle = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 25px;
    @media ${media.meduim} {
    }
    @media ${media.large} {
        justify-content: flex-start;
        padding: 100px 165px;
    }
    div {
        border: solid 3px white;
        padding: 25px;
        /* max-width: 330px; */
        max-width: 500px;
        @media ${media.large} {
            padding: 40px;
            max-width: 620px;
        }

        h1 {
            color: white;
            font-family: var(--josefin);
            font-weight: 300;
            line-height: 1.3;
            font-size: 2.5rem;
            text-align: left;
            text-transform: uppercase;
            @media ${media.meduim} {
                font-size: 3.5rem;
            }
            @media ${media.large} {
                font-size: 4.5rem;
            }
        }
    }
`;
