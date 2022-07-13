import React from "react";
import {Header} from "../Head/Header";
import {Title} from "../Head/Title";
import {Input} from "../Head/Input";
import {Map} from "../Map/Map";
import {StyledLink} from "../Link /StyledLink";

export const HomePage = () => {

    return (
        <>
            <Header layout="space-between">
                <Title/>
                <StyledLink className='styledLink' to='/add'>Add new</StyledLink>
                <Input/>
            </Header>
            <Map/>
        </>

    )
}