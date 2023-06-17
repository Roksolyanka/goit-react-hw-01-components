import styled from 'styled-components';

export const Friend = styled.li`
  width: 490px;
  height: 90px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgb(231, 243, 253);
  margin-bottom: 5px;
  box-shadow: 10px 5px 5px rgb(79, 79, 79);

  &: hover {
    background-color: #f5f5f5;
    box-shadow: 0px 0px 49px 7px rgba(0, 60, 128, 1);
  }
`;
