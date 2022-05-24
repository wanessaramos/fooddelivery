import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.View`
  width:100%;
  align-items:flex-start;
  justify-content:center;
  background:${colors.white};
`;

export const Content = styled.View`
  width:100%;
  padding:10px;
  height:60px;
  align-items:center;
  justify-content:space-between;
  flex-direction:row;
`;

export const TitleContent = styled.View`
  width:100%;
  height:60px;
  padding:10px;
  align-items:center;
  justify-content:space-between;
  flex-direction:row;
  background:${colors.ghostWhite};
`;

export const LegendContent = styled.View`
  padding:8px;
  border-radius:10px;
  align-items:center;
  justify-content:center;
  background:${colors.darkGray};
`;

export const ItemLegend = styled.Text`
  color:${colors.white};
  font-size:${fontSize.big}px;
  font-family:${fonts.heading};
  text-align: justify
`;

export const ItemTitle = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
  text-align: justify
`;

export const ContainerButton = styled.View`
  height:60px;
  align-items:center;
  justify-content:space-around;
  flex-direction:row
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
  height:45px;
  align-items:center;
  justify-content:space-between;
  border-radius:5px;
  flex-direction:row;
`;

export const ItemQuantity = styled.Text`
  color:${colors.tomato};
  font-size:${fontSize.title}px;
  font-family:${fonts.text};
`;