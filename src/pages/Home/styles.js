import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export const Title = styled.Text`
  color:${colors.black};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
`;
