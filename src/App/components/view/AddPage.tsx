import {Header} from "../Head/Header";
import {AddForm} from "../AddForm/AddForm";
import React from "react";
import {StyledLink} from "../Link /StyledLink";



export const AddPage = () => {


    return (

        <>
            <Header layout="center">
                <StyledLink className='styledLink' to='/'>map view</StyledLink>
            </Header>
            <AddForm/>
        </>
    )

}