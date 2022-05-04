import React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import { HeaderStyle } from "../styles/HeaderStyle";

const Home = () => {
    return (
        <>
            <HeaderStyle>
                <Nav></Nav>
                <Hero />
            </HeaderStyle>
        </>
    );
};

export default Home;
