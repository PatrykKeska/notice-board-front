import styled from "styled-components";

interface Props{
    link: string;
    children: string
}

 const StyledButton = styled.a`
  text-align: center;
  background-color: green;
  min-width: 200px;
  width: 15%;
   padding:5px;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;

`

export const Button = (props: Props)=>{

    return(
        <StyledButton href={props.link}> {props.children}</StyledButton>
    )
}