import React, {ReactComponentElement} from 'react';
import {Navigate} from "react-router-dom";

type PropsType = {
    children: ReactComponentElement<any>;
}

export const ProtectedRoute:React.FC<PropsType> = ({children}) => {

    const login = true

    return login?children:<Navigate to={"/page/:error"}/>
}
