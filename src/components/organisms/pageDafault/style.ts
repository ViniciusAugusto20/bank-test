import styled from 'styled-components';
import { color } from '../../../assets/css/color';

export const Container = styled.section`
  background-color: ${color.app};
  min-height: 100%;
  height: auto;
  > section {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
  }
`;

export const MainContent = styled.section`
  width: auto;
  flex: 1;
  min-height: calc(100vh - 200px);
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
