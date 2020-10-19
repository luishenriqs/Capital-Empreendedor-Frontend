import styled from 'styled-components';

export const Form = styled.form`
  background: #47E10F;
  width: 100%;
  padding: 30px 0;

  legend {
    font-size: 32px;
    color: #fff;
    margin: 0 auto;
  }

  fieldset {
    width: 1350px;
    padding: 30px;
    border: none;
    margin: 0 auto;
  }

  input {
    width: 220px;
    height: 60px;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
    border: none;

    & + input {
      margin-left: 20px;
    }
  }

  #smallInput {
    width: 110px;
    height: 60px;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
    border: none;

    & + input {
      margin-left: 20px;
    }
  }

  }

  #true {
    width: 90px;
    background: #fff;
    margin-left: 20px;
    border-radius: 5px 0 0 5px;
    border: solid 1px #e5e5e5;
    color: #3BA239;
    transition: 0.5s;

    &:hover {
      color: #fff;
      background-color: #3BA239;
      border: solid 1px #3BA239;
    }
  }

  #false {
    width: 90px;
    background: #fff;
    margin: 0 20px 0 0;
    border-radius: 0 5px 5px 0;
    border: solid 1px #e5e5e5;
    color: #FF0000;
    transition: 0.5s;

    &:hover {
      color: #fff;
      background-color: #FF0000;
      border: solid 1px #FF0000;
    }
  }

  button {
    width: 100px;
    border-radius: 5px;
    height: 60px;
    background: #FF8000;
    color: #fff;
    border: none;
    font-weight: bold;
    transition: 0.5s;

    &:hover {
      border: solid 1px #FF8000;
    }
  }

  img {
    width: 300px;
    display: block;
    align-items: center;
    margin: 20px auto 10px auto;
  }
`;
