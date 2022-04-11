import styled from 'styled-components';

export const Container = styled.div`
border: 2px solid red;
background-color:#031029;
height: 71px;
display:flex;
align-items: center;

  & img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

  & p{
    color: white;
    size: 26px;
  }
`;

export const Teste = styled.img`
border: 2px solid border;
`;
