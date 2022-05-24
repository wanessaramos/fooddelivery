import React,{ useState, useEffect } from 'react';
import { Container, 
    Content, 
    TitleContent, 
    ItemTitle, 
    ContainerButton, 
    Button, 
    ItemQuantity, 
    Quantity,
    LegendContent,
    ItemLegend} from './styles';
import Entypo from '@expo/vector-icons/Entypo';
import colors from '../../assets/styles/colors';

export default function SelectItem({totalNumberOfMeatOptions, title, getSelectedItems, data}){

    const[selectedItems, setSelectedItems] = useState([])
    const[disabled,setDisabled]= useState(false);
    const[total,setTotal]= useState(totalNumberOfMeatOptions);
    var newItems = []

    useEffect(()=>{
        
        total < 2 ? setDisabled(false) : setDisabled(true) 
     
    },[total, disabled])

    const add = (index) =>{

        newItems = data
        
        if(total < 2){

            if(data[index].quantity != undefined){
        
                const quantity = data[index].quantity
                newItems[index] = {...newItems[index], quantity: quantity + 1}  
                setTotal(total + 1)
                setSelectedItems(newItems)
                
            }else{
                newItems[index] = {...newItems[index], quantity:1}
                setTotal(total + 1)
                setSelectedItems(newItems)
            }
        } 
    }

    const remove = (index) =>{

        newItems = data
 
        if(data[index].quantity != undefined && data[index].quantity > 0){ 

            const quantity = data[index].quantity
            newItems[index] = {...newItems[index], quantity: quantity - 1}   
            setTotal(total - 1)
            setSelectedItems(newItems)
        }    
    }

    const updateSelectedItems = () =>{

        const selecteds = selectedItems.filter(item => {
            return item.quantity > 0 && item !== undefined;
        });
   
        selecteds.length === 2 ? getSelectedItems(selecteds) : null
       
        if(selecteds.length === 1){
            selecteds.map(item =>{
                item.quantity === 2 ? getSelectedItems(item) : null
            })    
        }

    }

    const listOptions = () =>{
        return(
            data.map((item,index) =>{
                return(
                    <Content key={index}>
                        <ItemTitle>{item.name}</ItemTitle>
                        {item.quantity >= 1  ?
                            <ContainerButton>
                                <Quantity>
                                    <Button onPress={()=>{remove(index),updateSelectedItems()}}>
                                        <Entypo name='minus' size={16} color={colors.tomato}/>
                                    </Button>
                                    <ItemQuantity>{item.quantity}</ItemQuantity>
                                    <Button onPress={()=>{add(index), updateSelectedItems()}} disable={disabled}>
                                        <Entypo name='plus' size={16} color={disabled ? colors.silver : colors.tomato}/>
                                    </Button> 
                                </Quantity>
                            </ContainerButton>:
                            <ContainerButton>
                                <Quantity>
                                    <Button onPress={()=>{add(index), updateSelectedItems()}} disable={disabled}>
                                        <Entypo name='plus' size={16} color={disabled ? colors.silver : colors.tomato}/>
                                    </Button> 
                                </Quantity>
                            </ContainerButton>
                        } 
                    </Content>
                )
            })
        )
    }

    return(
        <Container>
            <TitleContent>
                <ItemTitle>{title}</ItemTitle>
                <LegendContent>
                    <ItemLegend>escolha até 2 opções</ItemLegend>
                </LegendContent>
            </TitleContent>
            {listOptions()}
        </Container>     
    )
}
