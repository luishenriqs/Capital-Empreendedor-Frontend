import styled from 'styled-components';

export const Container = styled.div`

  legend {
    font-size: 42px;

    color: #fff;
    text-align: center;
    margin: 60px auto 0;
  }

  form {
    display: 1;
    margin: 40px auto 70px;
    
    table {
      width: 100%;

      tr {
        display: flex;
        justify-content: center;
      }

      th {
        color: #969cb3;
        width: 200px;
        font-weight: normal;
        padding: 20px 15px;
        text-align: center;
        font-size: 16px;
        line-height: 24px;
      }
    }
    
    section {
      div {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
          background: #fff;
          color: #969cb3;
          width: 200px;
          font-weight: normal;
          padding: 20px 15px;
          margin: 1px;
          text-align: center;
          font-size: 16px;
          border: 0;
          border-radius: 8px 0 0 8px;

          &:hover {
            border: solid 1px #3BA239;
          }
        }
      
        span {
          background: #fff;
          color: #969cb3;
          width: 200px;
          font-weight: normal;
          padding: 20px 15px;
          margin: 1px;
          text-align: center;
          font-size: 16px;
        }  

        span:last-child {
          border-radius: 0 8px 8px 0;
        }
      }
    }
  }
`;
