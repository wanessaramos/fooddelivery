import React, { useState, useEffect, useContext, useMemo } from 'react';
import {Container, 
    Item, 
    ItemName, 
    ItemTitle, 
    ItemImage, 
    ItemDetails, 
    ItemDescription,
    ItemPrice,
    ItemQuantity,
    ItemContainer,
    Image,
    TotalContainer,
    Content,
    Button,
    ButtonName,
    ButtonContainer,
    ItemsSelectedsContainer,
    ContentFinalizeOrder,
    TotalButton,
    TitleButton} from './styles';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../../components/Header';
import Context from '../../context';
import colors from '../../assets/styles/colors';
import { ScrollView } from 'react-native';
import api from '../../services/api';

export default function Cart(){

    const navigation = useNavigation();

    const {state, dispatch} = useContext(Context);

    const[cart, setCart]= useState([])

    const formatCurrency = (value) =>{
        return (Math.round(value * 100) / 100).toFixed(2);
    }
    
    useEffect(()=>{
        setCart(state.DATA)
    },[cart, state])

    const totalAmountOrder = useMemo(()=>{
        const orderByQuantity = cart.reduce((previous, item) => {
          const totalValue = previous + item.price * item.quantity;
          return totalValue;
        }, 0);
    
        return formatCurrency(orderByQuantity)
      },[cart])

    const itemDelete = (id) =>{

        api.delete(`/shoppingcart/${id}`)
            .then(response => 
               dispatch({
                    type:'DELETE',
                    payload:id
                })
            ).catch(error => {
                console.log('error', error);
        });

       navigation.navigate('Cart') 

    }

    return(
        <Container>
            <Header title={'Meus Pedidos'}/>
            <Content>
              <ScrollView>
                  {cart.map((item, index) => {
                    return(
                        <ItemContainer key={index}>
                            <Item border={index === (cart.length - 1) ? '0px' : '1px'}>
                                <ItemDetails>
                                    <ItemTitle>{item.name}</ItemTitle>
                                    {item.type === 'quentinha' ?
                                    <ItemsSelectedsContainer key={index}>
                                        <ItemName>{item.rice.name}</ItemName>
                                        <ItemName>{item.bean.name}</ItemName>
                                        {item.meat.length >= 1 ?
                                            item.meat.map((meat, index) =>{
                                                return(
                                                    <ItemName key={index}>{`${meat.quantity} x ${meat.name}`}</ItemName> 
                                                )
                                            }): 
                                               <ItemName>{item.meat.quantity === undefined ?
                                                 `${item.quantity} x ${item.meat.name}` :
                                                 `${item.meat.quantity} x ${item.meat.name}`}</ItemName>  
                                        }
                                    </ItemsSelectedsContainer>:
                                        <ItemDescription>{item.description}</ItemDescription>
                                    }
                                  
                                        <TotalContainer>
                                            <ItemQuantity>{`${item.quantity} x `}</ItemQuantity>
                                            <ItemPrice>{`R$ ${formatCurrency(item.price)}`}</ItemPrice>
                                        </TotalContainer>
                                </ItemDetails>
                                <ItemImage> 
                                    <Image source={{uri:item.image}}/> 
                                </ItemImage>     
                            </Item>
                            <ButtonContainer>
                                <Button onPress={()=> navigation.navigate('ItemView',{ payload:'update',item: item })}>
                                    <Ionicons name='ios-pencil' size={20} color={colors.silver}/>
                                    <ButtonName> Editar</ButtonName>    
                                </Button>
                                <Button onPress={()=>{itemDelete(item.id)}}>
                                    <Ionicons name='trash' size={20} color={colors.silver}/>
                                    <ButtonName> Excluir</ButtonName>    
                                </Button>
                            </ButtonContainer>
                        </ItemContainer>
                    )
                  })}
              </ScrollView> 
            </Content>
                <ContentFinalizeOrder>
                    <TotalButton onPress={()=> navigation.navigate('LoadingOrder')}>
                        <TitleButton>{`Finalizar Pedido R$ ${totalAmountOrder}`}</TitleButton>
                    </TotalButton>
                </ContentFinalizeOrder>   
        </Container>
    )
}