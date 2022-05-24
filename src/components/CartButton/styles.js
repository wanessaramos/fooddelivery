import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.TouchableOpacity`
  padding:10px;
  height:45px;
  align-items:center;
  justify-content:center;
  background:${colors.white};
  flex-direction:row;
  border-radius:8px;
`;

export const Title = styled.Text`
  color:${colors.white};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
`;

export const Image = styled.Image`
  width:32px;
  height:${props => props.height}px;
`;

export const Content = styled.View`
  margin-right:5px;
  width:24px;
  height:24px; 
  border-radius:100px;
  justify-content:center;
  align-items:center;
  background:${colors.aquamarine}
`;