import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.TouchableOpacity`
  width:60%;
  padding:10px;
  height:45px;
  align-items:center;
  justify-content:center;
  background:${colors.tomato};
  flex-direction:row;
  border-radius:8px;
`;

export const Title = styled.Text`
  color:${colors.white};
  font-size:${fontSize.title}px;
  font-family:${fonts.heading};
`;