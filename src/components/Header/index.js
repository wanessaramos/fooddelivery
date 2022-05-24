import React from 'react-native';
import { Container, ItemTitle, Title, Icon } from './styles';
import { StatusBar } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import colors from '../../assets/styles/colors';
import { useNavigation } from '@react-navigation/native';

const height = StatusBar.currentHeight.toString();

export default function Header({title}){
    
    const navigation = useNavigation();

    return(
        <Container height={height}>
            <Icon onPress={()=>{navigation.goBack()}}>
                <Entypo name='chevron-thin-left' size={24} color={colors.tomato}/>
            </Icon>
            <Title>
                <ItemTitle>{title}</ItemTitle>
            </Title>    
        </Container>
    )
}