import styled from 'styled-components';

interface Props {
    layout: string
}
export const Header = styled.div<Props>`
  background-color: royalblue;
  width: 100vw;
  height: 45px;
  display: flex;
  justify-content: ${props => props.layout};
  align-items: center;
  padding: 5px 10px;
  
`;








