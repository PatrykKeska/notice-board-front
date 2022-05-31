import styled from 'styled-components';
import {Link} from "react-router-dom";
import React from "react";

export const StyledLink = styled(Link)`
  font-size: .5em;
  text-align: center;
  background-color: green;
  min-width: 80px;
  max-width: 250px;
  max-height: 35px;
  width: 20%;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  @media(min-width: 600px){
    min-width: 100px;
    max-width: 250px;
    width: 25%;
    font-size: .6em;
  }
`