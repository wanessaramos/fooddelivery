import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.View`
  align-items:center;
  justify-content:center;
  background:${colors.white};
  top:0px;
  position:absolute
  zIndex:1
`;

export const CategoriesList = styled(FlatList).attrs({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
  })`
`;

export const ItemCategories = styled.TouchableOpacity`
  height:45px;
  padding:10px;
  align-items:center;
  justify-content: center;
  background:${colors.white}
  borderBottomWidth:${props => props.border};
  borderBottomColor:${colors.tomato};
`;

export const Title = styled.Text`
  color:${props => props.color};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
`;