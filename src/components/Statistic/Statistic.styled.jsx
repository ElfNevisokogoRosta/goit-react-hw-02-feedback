import styled from 'styled-components';
const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const ListElement = styled.li`
  list-style-type: none;
  margin: 5px 10px;
  padding: 5px 20px;
  background-color: #fbfbfb;
  border-radius: 4px;
  font-size: 16px;
`;
export { StyledList, ListElement };
