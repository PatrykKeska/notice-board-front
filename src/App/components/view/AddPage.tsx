import {Header} from "../Head/Header";
import {AddForm} from "../AddForm/AddForm";
import React from "react";
import {Link} from "react-router-dom";



export const AddPage = () => {


    return (

        <>
            <Header layout="center">
                <Link className='styledLink' to='/'>map view</Link>
            </Header>
            <AddForm/>
        </>
    )

}