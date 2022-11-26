import React from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";
import { StyledTable } from "./transactionsTable.styled";

const TransactionsTable = ({ accountBalance }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        date: "June 20th, 2020",
        description: "Golden Sun Bakery",
        amount: "$10.00",
        balance: accountBalance,
      },
      {
        date: "June 20th, 2020",
        description: "Golden Sun Bakery",
        amount: "$10.00",
        balance: accountBalance,
      },
      {
        date: "June 20th, 2020",
        description: "Golden Sun Bakery",
        amount: "$10.00",
        balance: accountBalance,
      },
      {
        date: "June 20th, 2020",
        description: "Golden Sun Bakery",
        amount: "$10.00",
        balance: accountBalance,
      },
      {
        date: "June 20th, 2020",
        description: "Golden Sun Bakery",
        amount: "$10.00",
        balance: accountBalance,
      },
      {
        date: "June 20th, 2020",
        description: "Golden Sun Bakery",
        amount: "$10.00",
        balance: accountBalance,
      },
    ],
    [accountBalance]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};

TransactionsTable.propTypes = {
  accountBalance: PropTypes.string,
};

export default TransactionsTable;
