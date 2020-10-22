import styled from 'styled-components';

export const Container = styled.div`
  background: #3BA239;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 300px;
    }

    h3 {
      margin-left: 400px;
      color: #fff;
      font-size: 18px;
    }

    h2 {
      margin-left: 680px;
      color: #fff;
      font-size: 16px;
    }

    a {
      width: 100px;
      margin-left: 550px;
      text-decoration: none;
      color: #fff;
      font-size: 16px;
    }
  }
`;