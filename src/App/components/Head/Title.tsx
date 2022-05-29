import styled from 'styled-components';
import React from "react";



interface TitleType {
    color?: string,
    bold?: string,
    fontSize?: string,
}

 const StyledTitle = styled.h1<TitleType>`
  font-size: 1.2em;
  text-align: center;
  color: white;
  margin: 5px;
`
const UnderTitle = styled.h3`
font-size: 1em;
  color: white;
  margin:0 5px;
`

const Wrapper = styled.div`
width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`


export const Title= () =>(
    <Wrapper>
        <StyledTitle>Mega</StyledTitle><UnderTitle>Advertisement</UnderTitle>
    </Wrapper>
)



