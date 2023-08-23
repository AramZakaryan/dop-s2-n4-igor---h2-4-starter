import React from 'react';
import {useNavigate} from "react-router-dom";

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props
    const navigate = useNavigate()
    const onClickGoToPageOneHandler = ()=> {
        navigate("/page/0")
    }
    const onClickGoToPreviousPageHandler=()=>{
        navigate(-1)
    }
    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={onClickGoToPageOneHandler}>Go to Page One</button>
            <button onClick={onClickGoToPreviousPageHandler}>Go to Previous Page</button>
        </div>
    );
};

