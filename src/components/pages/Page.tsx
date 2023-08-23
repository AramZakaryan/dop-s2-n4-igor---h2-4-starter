import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "./Content";
import {Error404} from "./Error404";

type PagePropsType = {
    pages: Array<PagesType>
}


export const Page = (props: PagePropsType) => {
    const param = useParams<"id">()
    const paramId = Number(param.id)

    return (<>
        {
            props.pages[Number(param.id)]
                ? <Content heading={props.pages[Number(param.id)].heading}
                           pages={props.pages[Number(param.id)].about}/>
                : <Error404/>
        }

    </>);
};

