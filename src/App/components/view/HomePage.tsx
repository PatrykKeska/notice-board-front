import React from "react";
import {Header} from "../Head/Header";
import {Title} from "../Head/Title";
import {Input} from "../Head/Input";
import {Map} from "../Map/Map";
import {Link} from "react-router-dom";

export const HomePage = () => {

    return (
        <>
            <Header layout="space-between">
                <Title/>
                <Link className='styledLink' to='/add'>new advertisement</Link>
                <Input/>
            </Header>
            <Map/>
        </>

    )
}