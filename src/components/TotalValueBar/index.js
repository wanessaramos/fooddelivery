import React,{ useState, useEffect } from 'react';
import { Container, Button, ItemQuantity, Quantity } from './styles';
import Entypo from '@expo/vector-icons/Entypo';
import colors from '../../assets/styles/colors';
import SubmitButton from '../Button';

export default function TotalValueBar({value, itemQuantity, getQuantity}){

    const[quantity,setQuantity]= useState(1)

    const add = () =>{
        setQuantity(quantity + 1)
    }

    const remove = () =>{
        quantity > 1 ? setQuantity(quantity - 1) : 1    
    }

    useEffect(()=>{
        itemQuantity !== undefined ? setQuantity(itemQuantity) : null
    },[])

    return(
        <Container>      
            <Quantity>
                <Button onPress={remove}>
                    <Entypo name='minus' size={16} color={colors.tomato}/>
                </Button>
                <ItemQuantity>{quantity}</ItemQuantity>
                <Button onPress={add}>
                    <Entypo name='plus' size={16} color={colors.tomato}/>
                </Button> 
            </Quantity>
            <SubmitButton value={value} quantity={quantity} addQuantity={(quantity)=>getQuantity(quantity)}/>       
        </Container>
    )
}