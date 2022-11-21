import styled from "styled-components";
import { gradientGreys, colors } from "../../utils/colors";

export const StyledTable = styled.div`
  font-size: 0.8rem;
  padding: 0.2rem;

  table {
    margin: auto;
    text-align: center;
    border-spacing: 0;
    border: 0px solid black;
    color: ${gradientGreys.gray2} tr {
      :last-child {
        td {
          border-bottom: 1px solid ${gradientGreys.gray1};
        }
      }
    }
    th {
      margin: 0;
      padding: 0.8rem 1rem;
      border-top: 0px;
      color: ${colors.white};
      border-bottom: 1px solid ${gradientGreys.gray1};
      text-transform: uppercase;
      font-size: 0.75rem;
      :last-child {
        display: none;
      }
    }
    td {
      background-color: ${colors.white};
      margin: 0;
      padding: 20;
      border-bottom: 3px solid ${gradientGreys.gray1};

      :first-child {
        border-left: 1px solid ${gradientGreys.gray1};
      }

      :last-child {
        border-right: 1px solid ${gradientGreys.gray1};
        display: none;
      }
    }
  }
  @media (min-width: 600px) {
    padding: 1rem;

    table {
      margin: auto;
      text-align: center;
      border-spacing: 0;
      border: 0px solid black;
      color: ${gradientGreys.gray2} tr {
        :last-child {
          td {
            border-bottom: 1px solid ${gradientGreys.gray1};
          }
        }
      }
      th {
        margin: 0;
        padding: 0.8rem 1.5rem;
        border-top: 0px;
        color: ${colors.white};
        border-bottom: 1px solid ${gradientGreys.gray1};
        text-transform: uppercase;
        font-size: 0.75rem;
        :last-child {
          display: flow-root;
        }
      }
      td {
        background-color: ${colors.white};
        margin: 0;
        padding: 15px 50px;
        border-bottom: 3px solid ${gradientGreys.gray1};

        :first-child {
          border-left: 1px solid ${gradientGreys.gray1};
        }

        :last-child {
          border-right: 1px solid ${gradientGreys.gray1};
          display: table-cell;
        }
      }
    }
  }
`;
