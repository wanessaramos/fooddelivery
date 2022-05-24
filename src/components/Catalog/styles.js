import styled from 'styled-components/native';
import { SectionList } from 'react-native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.SafeAreaView`
  margin-top:45px;
  width:100%; 
  justify-content:center;
  flex-direction:column;
  background:${colors.white};
`;

export const Content = styled.View`
  width:100%; 
  justify-content:center;
  flex-direction:column;
`;

export const ContainerTitle = styled.View`
  width:100%;
  height:50px;
  align-items:center; 
  justify-content:center;
  padding:5px;
`;

export const CategoryTitle = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.title}px;
  font-family:${fonts.text};
  text-align:center;
`;

export const ItemsList = styled(SectionList).attrs({
    showsVerticalScrollIndicator:false,
  })`
`;

export const ItemContainer = styled.TouchableOpacity`  
  justify-content:center;
  padding-left:10px;
  padding-right:10px;
`;

export const Item = styled.TouchableOpacity`
  width:100%;
  height:150px;
  maxHeight:150px;
  justify-content:space-between;
  flex-direction:row;
  borderTopWidth:1px;
  borderTopColor:${colors.silver};
  padding:5px;
`;

export const ItemDetails = styled.View`
  maxWidth:68%;
  justify-content:space-between;
`;

export const Image = styled.Image`
  width:100px;
  height:70px;
  resizeMode:cover
`;

export const ItemImage = styled.View`
  justify-content: center;
`;

export const ItemTitle = styled.Text`
  color:${colors.tomato};
  font-size:${fontSize.big}px;
  font-family:${fonts.heading};
`;

export const ItemDescription = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.regular}px;
  font-family:${fonts.text};
  text-align: justify
  justify-content:center;
  margin: 5px 0 5px 0;
  padding-right:5px;
`;

export const ItemPrice = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.heading};
`;