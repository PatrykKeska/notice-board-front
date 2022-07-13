import styled from 'styled-components';
import React from "react";


interface TitleType {
    color?: string,
    bold?: string,
    fontSize?: string,
}

const StyledTitle = styled.h1<TitleType>`
  text-align: center;
  font-size: .9em;
  color: white;
  margin-right: 5px;
`
const UnderTitle = styled.h3`
  font-size: .8em;
  color: white;
`

const Wrapper = styled.div`
  width: 25%;
  font-size: .8em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(min-width: 600px){
    font-size: 1em;
    flex-direction: row;
    width: 30%;
justify-content: flex-start;
  }
  
`


export const Title = () => (
    <Wrapper>
        <StyledTitle>Mega</StyledTitle><UnderTitle>Advertisement</UnderTitle>
    </Wrapper>
)



