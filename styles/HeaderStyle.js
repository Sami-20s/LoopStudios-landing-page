import styled from "styled-components";
import { media } from "./screenSize";

export const HeaderStyle = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url("/mobile/image-hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @media ${media.meduim} {
        background-image: url("/desktop/image-hero.jpg");
        background-position: center center;
    }
    @media ${media.large} {
        background-size: cover;
        background-position: unset unset;
        background-image: url("/desktop/image-hero.jpg");
    }
`;
