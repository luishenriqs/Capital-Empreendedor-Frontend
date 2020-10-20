import styled from 'styled-components';

export const TableContainer = styled.div`

  display: 1;

  legend {
    font-size: 42px;
    color: #fff;
    text-align: center;
    margin: 60px auto 0;
  }
  table {
    display: 1;
    margin: 60px auto;
    
    thead {
      width: 100%;
      border-spacing: 0 8px;

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
    tbody {
      tr {
        width: 100%;
        border-spacing: 0 8px;
        
        td {
          background: #fff;
          color: #969cb3;
          width: 200px;
          font-weight: normal;
          padding: 20px 15px;
          text-align: center;
          font-size: 16px;
          border: 0;
        }

        td:first-child {
          border-radius: 8px 0 0 8px;
        }

        td:last-child {
          border-radius: 0 8px 8px 0;
        }
      }
    }
  }
`;
