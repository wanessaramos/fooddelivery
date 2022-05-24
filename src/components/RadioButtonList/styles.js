import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.View`
  width:100%;
  align-items:flex-start;
  justify-content:center;
`;

export const Content = styled.View`
  width:100%;
  padding:10px;
  align-items:center;
  justify-content:flex-start;
  flex-direction:row
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

export const ItemTitle = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
  text-align: justify
`;

export const ContentButton = styled.View`
  width:24px;
  height:24px;
  align-items:center;
  justify-content:center;
  background:${colors.white};
  border-radius:100px;
  borderWidth:1px;
  borderColor:${colors.dimGray};
  flex-direction:row;
`;

export const Button = styled.TouchableOpacity`
  width:16px;
  height:16px;
  align-items:center;
  justify-content:center;
  background:${props => props.check ? colors.tomato : colors.white};
  border-radius:100px;
`;

export const ItemName = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
`;

export const ItemContent = styled.View`
  padding:5px;
  align-items:flex-start;
  justify-content:center;
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