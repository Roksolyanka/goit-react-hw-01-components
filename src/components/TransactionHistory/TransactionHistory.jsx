import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { Table } from './Table.styled';
import { TableHead } from './TableHead.styled';
import { Type } from './Type.styled';
import { Row } from './Row.styled';
import { Amount } from './Amount.styled';
import { Currency } from './Currency.styled';

export const TransactionHistory = ({ items }) => (
  <Table className="transaction-history">
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <Row key={id}>
          <Type>{type}</Type>
          <Amount>{amount}</Amount>
          <Currency>{currency}</Currency>
        </Row>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.prototypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
