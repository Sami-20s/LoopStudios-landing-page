import React from "react";
import { NavLinksStyle } from "../../styles/NavStyle";
import { linksList } from "./navList";

const NavLinks = ({ isClicked }) => {
    return (
        <NavLinksStyle isClicked={isClicked}>
            <ul>
                {linksList.map(link => {
                    return (
                        <li key={link.id}>
                            <a href={link.link}> {link.text}</a>
                            {/* {link.text} */}
                        </li>
                    );
                })}
            </ul>
        </NavLinksStyle>
    );
};

export default NavLinks;
