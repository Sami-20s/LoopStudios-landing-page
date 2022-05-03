import React, { useState, useEffect } from "react";
import { BurgerIconStyle, NavWrapper } from "../../styles/NavStyle";
import NavLinks from "./NavLinks";
const users = [{}];
const Nav = () => {
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        isClicked
            ? (document.body.style.overflowY = "hidden")
            : (document.body.style.overflowY = "unset");
    }, [isClicked]);
    return (
        <nav id="nav">
            <NavWrapper isClicked={isClicked}>
                <a href="#">
                    <img src="/logo.svg" alt="loop links logo" />
                </a>
                <NavLinks isClicked={isClicked} />
                <BurgerIconStyle>
                    <button onClick={() => setIsClicked(!isClicked)}>
                        <img
                            src={`${
                                isClicked
                                    ? "icon-close.svg"
                                    : "/icon-hamburger.svg"
                            }`}
                            alt="hamburger button"
                        />
                    </button>
                </BurgerIconStyle>
            </NavWrapper>
        </nav>
    );
};

export default Nav;
