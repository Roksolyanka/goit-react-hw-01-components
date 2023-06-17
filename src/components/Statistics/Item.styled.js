import styled from 'styled-components';

export const Item = styled.li`
  width: 99px;
  height: 99px;
  display: grid;
  gap: 7px;
  justify-items: center;
  align-content: center;
  wrap: nowrap;
  border: 1px solid rgb(214, 214, 214);
  background-color: ${props => props.color};
`;
