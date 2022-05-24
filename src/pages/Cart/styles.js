import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import colors from '../../assets/styles/colors';
import fontSize from '../../assets/styles/fontSize';
import fonts from '../../assets/styles/fonts';

export const Container = styled.SafeAreaView`
  flex:1; 
  justify-content:flex-start;
  flex-direction:column;
  background:${colors.white};
`;

export const Content = styled.View`
  margin-top:80px;
  width:100%; 
  justify-content:center;
  flex-direction:column;
  margin-bottom:60px;
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

export const ItemsList = styled(FlatList).attrs({
    showsVerticalScrollIndicator:false,
  })`
`;

export const ItemContainer = styled.View`  
  padding-left:10px;
  padding-right:10px;
`;

export const ItemsSelectedsContainer = styled.View`  
  
`;

export const Item = styled.View`
  width:100%;
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

export const ItemName = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
`;

export const ItemDescription = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.regular}px;
  font-family:${fonts.text};
  text-align: justify;
  justify-content:center;
  margin: 5px 0 5px 0;
  padding-right:5px;
`;

export const ItemPrice = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.heading};
`;

export const ItemQuantity = styled.Text`
  color:${colors.dimGray};
  font-size:${fontSize.big}px;
  font-family:${fonts.heading};
`;

export const ItemsContainer = styled.View`
  align-items:center;
  justify-content:flex-start;
  flex-direction:row;
  padding-top:5px;
`;

export const TotalContainer = styled.View`
  align-items:center;
  justify-content:flex-start;
  flex-direction:row;
  padding-top:5px;
`;

export const Button = styled.TouchableOpacity`
  padding:10px;
  height:45px;
  border-radius:8px;
  justify-content:center;
  align-items:center;
  flex-direction:row;
`;

export const ButtonName = styled.Text`
  color:${colors.silver};
  font-size:${fontSize.big}px;
  font-family:${fonts.text};
`;

export const ButtonContainer = styled.View`
  align-items:center;
  justify-content:space-around;
  flex-direction:row;
`;

export const  ContentFinalizeOrder  = styled.View`
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

export const TotalButton = styled.TouchableOpacity`
  width:95%;
  padding:10px;
  height:45px;
  align-items:center;
  justify-content:center;
  background:${colors.tomato};
  flex-direction:row;
  border-radius:8px;
`;

export const TitleButton = styled.Text`
  color:${colors.white};
  font-size:${fontSize.title}px;
  font-family:${fonts.heading};
`;

