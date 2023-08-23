import React, {useState} from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth)
    })
    return windowSize
}