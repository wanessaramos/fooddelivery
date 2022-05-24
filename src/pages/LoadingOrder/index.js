import React,{ useEffect } from 'react';
import { Container, ContentText, Text, Title } from './styles';
import FastFood  from '../../assets/fast-food.json';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoadingOrder(){

    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Home')
        }, 6000);
    })

    return(
        <Container>
            <LottieView
                source={FastFood}
                autoPlay={true}
                loop={true}
                style={{width:150, height:150}}
                resizeMode='cover'
            />
            <ContentText>
                <Title>Aguarde, o tempo máximo para entrega é de 1h e 30min</Title>
                <Text>Agradecemos a preferência</Text>
            </ContentText>
        </Container>
    )

}