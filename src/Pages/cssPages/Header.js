import styled from 'styled-components';

const Container = styled.div`
background-color:#031029;
height: 71px;
display:flex;
align-items: center;

  & img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

  & div{
    display: flex;
    width: 100%;
    margin: 0 20px;
    justify-content: space-between;
  }

  & p{
    color: white;
    font-size: 26px;
  }
`;

export default Container;
