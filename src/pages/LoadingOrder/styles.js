import styled from 'styled-components/native';
import { SectionList } from 'react-native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.View`
  flex:1; 
  padding:15px;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background:${colors.white};
`;

export const ContentText = styled.View`
  width:70%;
  align-items:center; 
  justify-content:center;
`;

export const Title = styled.Text`
  color:${colors.tomato};
  font-size:${fontSize.title}px;
  font-family:${fonts.heading};
  text-align:center;
`;

export const Text = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
  text-align:center;
`;