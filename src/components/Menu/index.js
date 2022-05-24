import React,{ useState, useRef, useEffect } from 'react';
import {Container, 
    ItemCategories, 
    CategoriesList, 
    Title} from './styles'
import colors from '../../assets/styles/colors';
import api from '../../services/api';

export default function Menu({navigateMenu, sectionIndex}){
  
    const[categories, setCategories] = useState([]);

    const scrollRef = useRef();

    useEffect(()=>{
        async function getCategories(){
            
            try {
                const { data } = await api.get('categories');
                setCategories(data) 

                if(categories.length > 0){
                    navigateSectionByIndex()
                } 

            } catch (error) {
                console.log(error);  
            }
        }
        getCategories()

    },[sectionIndex])

    const navigateSectionByIndex = () =>{
        scrollRef.current?.scrollToIndex({
            animated: true,
            index: sectionIndex === undefined ? 0 : sectionIndex,
        });
    }

    return(
        <Container>
            <CategoriesList
                ref={scrollRef}
                data={categories}
                keyExtractor={(value, index) => index.toString()}
                renderItem={({item, index})=>(
                <ItemCategories
                onPress={()=>{navigateMenu(index)}}
                border={index === sectionIndex ? '2px' : '0px'}>
                    <Title color={index === sectionIndex ? colors.dimGray : colors.silver}>{item.title}</Title>
                </ItemCategories>)}
            />
        </Container>
    )
}