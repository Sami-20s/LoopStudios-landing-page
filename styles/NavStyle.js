import styled from "styled-components";
import { media } from "./screenSize";

export const NavWrapper = styled.div`
    padding: 40px 25px;
    display: flex;
    height: ${props => (props.isClicked ? "100vh" : "unset")};
    background-color: ${props => (props.isClicked ? "black" : "transparent")};
    justify-content: space-between;
    align-items: flex-start;
    overflow: none;

    @media ${media.large} {
        overflow: unset;
        height: unset;
        background-color: transparent;
        padding: 60px 165px;
    }
`;

export const NavLinksStyle = styled.div`
    ul {
        display: ${props => (props.isClicked ? "flex" : "none")};
        flex-direction: column;
        position: fixed;
        top: 200px;
        left: 25px;
        @media ${media.large} {
            left: 0;
            top: 0;
            display: flex;
            flex-direction: row;
            position: relative;
        }
        li {
            a {
                font-family: var(--josefin);
                font-weight: 300;
                color: var(--white);
                font-size: 1.5625rem;
            }
            @media ${media.large} {
                position: relative;
                a {
                    font-family: var(--alata);
                    font-weight: 400;
                    font-size: 1.125rem;
                }
                cursor: pointer;
                transition: all 0.3s ease;
                &::after {
                    display: block;
                    position: absolute;
                    content: "";
                    left: 50%;
                    transform: translateX(-50%);
                    top: calc(100% + 10px);
                    background-color: transparent;
                    width: 24px;
                    height: 2px;
                    transition: all 0.3s ease;
                }
                &:hover {
                    &::after {
                        background-color: var(--white);
                    }
                }
            }
            &:not(:last-child) {
                padding-bottom: 30px;
                @media ${media.large} {
                    padding-bottom: 0;
                    margin-right: 32px;
                }
            }
        }
    }
`;
export const BurgerIconStyle = styled.div`
    display: block;
    @media ${media.large} {
        display: none;
    }
    button {
        background-color: transparent;
        border: none;
        outline: none;
    }
`;
