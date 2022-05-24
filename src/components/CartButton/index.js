import React,{ useContext } from 'react';
import Context from '../../context';
import { Container, Title, Image, Content } from './styles';
import EmptyCart  from '../../assets/images/emptyCart.png';
import FullCart  from '../../assets/images/fullCart.png';
import { useNavigation } from '@react-navigation/native';

export default function CartButton(){

    const { state } = useContext(Context);

    const quantity = state.DATA.length;

    const navigation = useNavigation();

    return(
        <Container onPress={()=>{quantity > 0 ? navigation.navigate('Cart') : null}}>
            <Content>
                <Title>{quantity}</Title>
            </Content> 
            <Image source={quantity === 0 ? EmptyCart : FullCart}
                height={quantity === 0 ? '11' : '32'}/>
        </Container>
    )
}
