import React, {useState} from 'react';
import {Header} from "./App/components/Head/Header";
import {Title} from "./App/components/Head/Title";
import {Button} from "./App/components/Head/Button";
import {Input} from "./App/components/Head/Input";
import {Map} from "./App/components/Map/Map";
import {SearchContext} from "./context/search/search.context";


export const App = () => {
    const [search, setSearch] = useState('');
    return (
        <SearchContext.Provider value={{search: search, setSearch}}>
            <Header>
                <Title/>
                <Button>Add Advertisement</Button>
                <Input/>
            </Header>
            <Map/>
        </SearchContext.Provider>
    );
}


