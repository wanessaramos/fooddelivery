import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.View`
  width:100%;
  height:60px;
  align-items:center;
  justify-content:flex-start;
  margin-top:${props => props.height}px;
  background:${colors.white};
  flex-direction:row;
  top:0;
  zIndex:1;
  position:absolute;
`;

export const Icon = styled.TouchableOpacity`
  width:10%;
  align-items:center;
  justify-content:center;
`;

export const Title = styled.View`
  width:90%;
  align-items:center;
  justify-content:center;
`;

export const ItemTitle = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.title}px;
  font-family:${fonts.text};
`;
