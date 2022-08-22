import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.bg};
`;

export const Title = styled.Text`
  color: white;
  font-size: 27px;
`;


export const SubTitle = styled.Text`
  color: blue;
  font-size: 27px;

`;