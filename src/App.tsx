import React from 'react';
import {Header} from "./App/components/Head/Header";
import {Title} from "./App/components/Head/Title";
import {Button} from "./App/components/Head/Button";
import {Magnifier} from "./App/components/Head/Magnifier";


export const App = () => {

    return (
        <>
            <Header>
                <Title/>
                <Button>Add Advertisement</Button>
                <Magnifier/>
            </Header>
        </>
    );
}


