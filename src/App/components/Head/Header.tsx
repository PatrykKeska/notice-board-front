import styled from 'styled-components';

interface Props {
    layout: string
}
export const Header = styled.div<Props>`
  background-color: royalblue;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  
  
  @media(min-width:700px){
    padding: 10px;
    justify-content: ${props => props.layout}; 
  }
  
  
`;








