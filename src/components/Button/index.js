import React from 'react';
import { Container, Title } from './styles';

export default function Button({value, quantity, addQuantity}){

    const valueSum = quantity * value;

    const formatCurrency = (value) =>{
        return (Math.round(value * 100) / 100).toFixed(2);
    }

    return(
        <Container onPress={()=>{addQuantity(quantity)}}>
            <Title>
              Adicionar {`R$ ${formatCurrency(valueSum)}`}  
            </Title>
        </Container>
    )
}