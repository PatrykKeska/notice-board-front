import React from 'react';
import {Header} from "./App/components/Head/Header";
import {Title} from "./App/components/Head/Title";
import {Button} from "./App/components/Head/Button";
import {Input} from "./App/components/Head/input";
import {Map} from "./App/components/Map/Map";


export const App = () => {

    return (
        <>
            <Header>
                <Title/>
                <Button>Add Advertisement</Button>
                <Input/>
            </Header>
            <Map/>
        </>
    );
}


