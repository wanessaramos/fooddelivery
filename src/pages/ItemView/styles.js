import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex:1;
  align-items:center;
  background:${colors.white};
`;

export const Content = styled.View`
  width:100%; 
  flex-direction:column;
`;

export const Image = styled.Image`
  margin-top:60px;
  width:100%;
  height:300px;
  resizeMode:cover
`;

export const ItemDescription = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
  text-align: justify
`;

export const ItemPrice = styled.Text`
  color:${colors.aquamarine};
  font-size:${fontSize.bigger}px;
  font-family:${fonts.text};
`;

export const ItemDetails = styled.View`
  padding:10px;
  justify-content:space-around;
  minHeight:100px;
`;

export const Buttons = styled.View`
  background:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.heading};
`;

export const ItemOption = styled.View`
  padding:10px;
`;

export const Option = styled.View`
  align-items:flex-start;
  justify-content:flex-start;
`;

export const TitleOption = styled.View`
  width:100%;
  height:60px;
  padding:10px;
  align-items:flex-start;
  justify-content:center;
  background:${colors.ghostWhite};
`;

export const Title = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
  text-align: justify
`;

export const OptionsList = styled(ScrollView).attrs({
  showsVerticalScrollIndicator:false,
})`
  width:100%
  margin-bottom:60px;
`;
