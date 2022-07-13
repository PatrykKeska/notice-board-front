import React, {useState} from 'react';
import {SearchContext} from "./context/search/search.context";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./App/components/view/HomePage";
import {AddPage} from "./App/components/view/AddPage";


export const App = () => {
    const [search, setSearch] = useState('');
    return (
        <SearchContext.Provider value={{search: search, setSearch}}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/add' element={<AddPage/>}/>
            </Routes>
        </SearchContext.Provider>
    );
}


