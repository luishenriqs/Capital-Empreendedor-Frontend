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

    div {
      margin-left: 400px;
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;