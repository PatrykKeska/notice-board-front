import React from 'react';
import styled from 'styled-components';
import {Magnifier} from "./Magnifier";


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

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 100px;
  width: 30%;
  min-height: 15%;
  height: 50%;
`


export const Input = ()=>(

    <Wrapper>
   <StyledInput/>
        <Magnifier/>
    </Wrapper>
)