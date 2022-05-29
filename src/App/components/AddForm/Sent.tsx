import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  font-size: 1.2em;
  background-color: #d0895a;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Message = styled.p`
color: white;
  text-transform: uppercase;
`


export const SentPopup = () => {
    return (
        <Wrapper>
            <Message>Your advertisement added</Message>
        </Wrapper>
    )
}