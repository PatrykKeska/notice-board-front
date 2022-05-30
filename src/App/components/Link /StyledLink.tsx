import styled from 'styled-components';
import {Link} from "react-router-dom";
import React from "react";

export const StyledLink = styled(Link)`
  font-size: .8em;
  text-align: center;
  background-color: green;
  min-width: 200px;
  width: 15%;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
`