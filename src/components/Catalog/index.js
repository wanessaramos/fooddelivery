import React,{ useState, useRef, useEffect } from 'react';
import {Container, 
    Item, 
    ItemsList, 
    ItemTitle, 
    ItemImage, 
    ItemDetails, 
    ItemDescription,
    ItemPrice,
    ItemContainer,
    Image,
    CategoryTitle,
    ContainerTitle} from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function Catalog({sectionIndex, navigateSection}){

    const navigation = useNavigation();

    const [items, setItems]=useState([])

    const scrollRef = useRef();

    const formatCurrency = (value) =>{
        return (Math.round(value * 100) / 100).toFixed(2);
    }

    useEffect(()=>{
        async function getFood(){
            
            try {
                const { data } = await api.get('food');
                setItems(data) 

                if(items.length > 0){
                    navigateSectionByIndex()
                } 

            } catch (error) {
                console.log(error);  
            }
        }
        getFood()

    },[sectionIndex])

    const navigateSectionByIndex = () =>{
        scrollRef.current?.scrollToLocation({
            animated: true,
            sectionIndex: sectionIndex === undefined ? 0 : sectionIndex,
            itemIndex: 0,
        });
        navigateSection(sectionIndex)
    }

    return(
        <Container>
            <ItemsList
            ref={scrollRef}
            sections={items}
            initialNumToRender={0}
            keyExtractor={(item, index) => item + index}
            renderItem={({item, index})=>(
                <ItemContainer>
                    <Item
                    key={index}
                    onPress={()=> navigation.navigate('ItemView',{  payload:'add', item: item })}
                    border={index === (items.length - 1) ? '0px' : '1px'}>
                    <ItemDetails> 
                        <ItemTitle>{item.name}</ItemTitle>
                        <ItemDescription>{item.description}</ItemDescription>
                        <ItemPrice>{`R$ ${formatCurrency(item.price)}`}</ItemPrice>
                    </ItemDetails>
                    <ItemImage> 
                        <Image source={{uri:item.image}}/> 
                    </ItemImage>   
                    </Item>
                </ItemContainer>
            )}
            renderSectionHeader={({ section: { title }}) => (
                <ContainerTitle>
                    <CategoryTitle>{title}</CategoryTitle> 
                </ContainerTitle>
            )}
            />
        </Container>
    )
}
