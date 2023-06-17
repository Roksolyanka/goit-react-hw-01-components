import styled from 'styled-components';

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: rgb(189, 226, 255);
  }

  &:nth-child(odd) {
    background-color: rgb(231, 243, 253);
  }

  &: hover {
    background-color: #fff;
    box-shadow: 0px 0px 49px 7px rgba(0, 60, 128, 1);
  }
`;
