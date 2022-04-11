import styled from 'styled-components';

// root {
//   --main-color: #f9f9f9;
//   --secondary-color: #031029;
//   --accent-color: #FFCD29;
//   --azul-light: #aac8ff;
// }

export const Container = styled.div`
  align-items: center;
  background-color: ${({ name }) => ((name === 'container-login')
    ? '#031029'
    : '#f9f9f9')
};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ContainerForm = styled.div`
  align-items: center;
  background-color: var(--main-color);
  display: flex;
  height: 450px;
  justify-content: center;
  margin: 0 auto;
  width: 400px;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-around;
  min-height: 300px;
  text-align: center;
  width: 70%;

  & label {

    height: 40px;
    width: 100%;
  }
  
  & input {

    height: 100%;
    padding: 5px 10px;
    width: 100%;
  }



`;



.container__btn {
  display: flex;
  flex-direction: column;
  height: 130px;
  justify-content: space-between;
  width: 100%;
}

.btn__enter {
  background-color: var(--accent-color);
  height: 55px;
  width: 100%;
}

.btn__config {
  background-color: var(--secondary-color);
  color: var(--main-color);
  height: 55px;
  text-align: center;
  width: 100%;
}

.logo {
  margin-top: 60px;
  max-height: 300px;
  max-width: 90%;
}
