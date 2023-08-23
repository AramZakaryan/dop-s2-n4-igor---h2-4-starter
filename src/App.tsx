import React, {ReactComponentElement, useEffect, useState} from 'react';
import './App.css';
import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import {S} from "./styles/_AppStyles";
import {useWindowSize} from "./helpers/useWindowSize";


// #доп_вторник_2023-07-28_Игорь Юдинцев
// https://www.youtube.com/watch?v=hz74soTUa6Y&list=PLMH1EP4byJHQTJD-liUWRs6TMLaBj4ifD&index=20


function App() {

let size = useWindowSize()

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                {size > 1000
                    ? <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'}>PAGE 1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>PAGE 2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>PAGE 3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={"/protected"}>PAGE prot</NavLink></S.NavWrapper>
                    </div>
                    : ""}

                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default App;

