import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.View`
  width:100%;
  height:60px;
  align-items:center;
  justify-content:space-around;
  bottom:0;
  zIndex:1;
  position:absolute;
  background:${colors.white};
  flex-direction:row;
  padding:10px 0 10px 0;
`;

export const Button = styled.TouchableOpacity`
  width:36px;
  height:45px;
  border-radius:10px;
  align-items:center;
  justify-content:center;
  border-radius:8px;
`;

export const Quantity = styled.View`
  width:100px;
  height:45px;
  align-items:center;
  justify-content:space-between;
  border-color:${colors.silver};
  border-radius:5px;
  borderWidth:1px;
  flex-direction:row
`;

export const ItemQuantity = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.title}px;
  font-family:${fonts.text};
`;