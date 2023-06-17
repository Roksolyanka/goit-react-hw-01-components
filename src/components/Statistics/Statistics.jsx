import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { Title } from './Title.styled';
import { List } from './List.styled';
import { Label } from './Label.styled';
import { Percentage } from './Percentage.styled';
import { Item } from './Item.styled';
import { getRandomColor } from './getRandomColor';

export const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <Title className="title">{title}</Title>}

    <List className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <Item className="item" key={id} color={getRandomColor()}>
          <Label className="label">{label}</Label>
          <Percentage className="percentage">{percentage}%</Percentage>
        </Item>
      ))}
    </List>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
