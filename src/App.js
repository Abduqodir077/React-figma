import React, { useState } from "react";
import "./Style.css";
import Nav from "./components/Nav.js";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/Section_4";
import Section_5 from "./components/Section_5";
import Section_6 from "./components/Section_6";
import Footer from "./components/Footer";


function App() {

    return (
        <>
            <Nav/>
            <Section_2/>
            <Section_3/>
            <Section_4/>
            <Section_5/>
            <Section_6/>
            <Footer/>
         </>
    );
}

export default App;
