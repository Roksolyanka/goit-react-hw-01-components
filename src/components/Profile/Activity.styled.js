import styled from 'styled-components';

export const Activity = styled.li`
  width: 166px;
  height: 90px;
  display: grid;
  justify-items: center;
  align-content: center;
  wrap: nowrap;
  border: 1px solid rgb(214, 214, 214);
  background-color: rgb(122, 190, 245);
  color: #fff;

  &: hover {
    background-color: #fff;
    box-shadow: 0px 0px 49px 7px rgba(0, 60, 128, 1);
    color: #000;
  }
`;
