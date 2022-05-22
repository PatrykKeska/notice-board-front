import React, {FormEvent, FormEventHandler, useContext, useState} from 'react';
import styled from 'styled-components';
import {Magnifier} from "./Magnifier";
import {SearchContext} from "../../../context/search/search.context";


export const StyledInput = styled.input`
  min-width: 100px;
  width: 50%;
  min-height: 90%;
  height: 80%;
  border: none;
  border-radius: 20px;
  background-color: #ffffff;
  margin-right: 5px;

`

const Wrapper = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 100px;
  width: 30%;
  min-height: 15%;
  height: 50%;
`


export const Input = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputValue, setInputValue] = useState(search);

    const setSearchFromLocalState = (e:FormEvent)=>{
        e.preventDefault()

        setSearch(inputValue)
    }
    return (
        <Wrapper onSubmit={setSearchFromLocalState}>
            <StyledInput value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <Magnifier/>
        </Wrapper>
    )
}