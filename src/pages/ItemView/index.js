import React,{ useState, useContext, useEffect } from 'react';
import { Container,
     Image, 
     Content,  
     ItemDescription, 
     ItemPrice,
     ItemDetails,
     Option,
     OptionsList} from './styles';
import Context from '../../context';
import { useNavigation, useRoute  } from '@react-navigation/native';
import Header from '../../components/Header';
import TotalValueBar from '../../components/TotalValueBar';
import SelectItem from '../../components/SelectItem';
import RadioButtonList from '../../components/RadioButtonList';
import api from '../../services/api';

export default function ItemView(){

    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item

    const { dispatch } = useContext(Context);
    const[ selectedMeat, setSelectedMeat ] = useState(item?.meat);
    const[ selectedBean, setSelectedBean ] = useState(item?.bean);
    const[ selectedRice, setSelectedRice ] = useState(item?.rice);
   
    const[ meat, setMeat ] = useState([]);
    const[ rice, setRice ] = useState([]);
    const[ bean, setBean ] = useState([]);

    useEffect(() => {
        async function getItemsOptions(){
            try {
                const response = await Promise.all([
                    api.get("meat"),
                    api.get("rice"),
                    api.get("bean")    
                ]);
                const data = response.map((response) => response.data);
                setMeat(data[0])
                setRice(data[1])
                setBean(data[2])
            } catch {
                throw Error("Promise failed");
            }
        }
        getItemsOptions()
    },[])


    const packedLunch = (quantity) =>{

        if(selectedRice !== undefined && selectedBean !== undefined &&
             selectedMeat !== undefined){
   
            const food = {...item, rice:selectedRice, 
                bean:selectedBean, meat:selectedMeat, quantity:quantity}

            actions(food) 

        }else{
            alert('Todas as opções são obrigatórias !!!')
        }
    }

    const snack = (quantity) =>{
        const food = {...item, quantity} 
        actions(food)   
    }

    const actions = (food) =>{

        const payloadItem = route.params.payload

        if(payloadItem === 'add'){

            food.item_id = food.id
            food.id = Math.random()

            api.post(`/shoppingcart`, {...food})
                .then(resposta => 
                    dispatch({
                        type:'ADD',
                        payload:resposta.data
                    })
                ).catch(error => {
                    console.log('error', error);
            });
            
        }else{
    
            api.put(`/shoppingcart/${item.id}`, {...food})
                .then(resposta => 
                    dispatch({
                        type:'UPDATE',
                        payload:resposta.data
                    })
                ).catch(error => {
                    console.log('error', error);
            });
              
        }

       navigation.navigate('Cart') 
    }


    const formatCurrency = (value) =>{
        return (Math.round(value * 100) / 100).toFixed(2);
    }

    const uploadListItems = () =>{

        var listAllMeat = meat
        var selectedListMeat = selectedMeat

        if(selectedMeat != undefined){
            
            if(Array.isArray(selectedMeat)){
    
                for(let i = 0; i < listAllMeat.length; i++){
                    for(let j = 0; j < selectedListMeat.length; j++){
                        if(listAllMeat[i].id === selectedListMeat[j].id ){
                            listAllMeat[i] = selectedListMeat[j]
                        }
                    }
                }
                
            }else{

                var pos = listAllMeat.map(function(item) { return item.id; }).indexOf(selectedMeat.id);
                listAllMeat[pos] = selectedMeat
            }

            return  listAllMeat

        }else{
            
            return meat
        }    
    }
    
    return(
        <Container>
            <Header title={item.name}/>
            <OptionsList>
                <Image source={{uri:item.image}}/>
                <Content>
                    <ItemDetails> 
                        <ItemDescription>{item.description}</ItemDescription>
                        <ItemPrice>{`R$ ${formatCurrency(item.price)}`}</ItemPrice>
                    </ItemDetails>
                    {item.type === 'quentinha' ? 
                        item.option === 1 ?
                        <Option>
                            <RadioButtonList data={meat} title={'Carne'} selected={selectedMeat}
                            getSelectedItem={(item)=> {setSelectedMeat(item)}}/>
                            <RadioButtonList data={rice} title={'Arroz'} selected={selectedRice}
                            getSelectedItem={(item)=> {setSelectedRice(item)}}/>
                            <RadioButtonList data={bean} title={'Feijão'} selected={selectedBean}
                            getSelectedItem={(item)=> {setSelectedBean(item)}}/>
                        </Option>
                        :
                        <Option>
                          <RadioButtonList data={rice} title={'Arroz'} selected={selectedRice}
                          getSelectedItem={(item)=> {setSelectedRice(item)}}/>
                          <RadioButtonList data={bean} title={'Feijão'} selected={selectedBean}
                          getSelectedItem={(item)=> {setSelectedBean(item)}}/>
                          <SelectItem data={uploadListItems()} title={'Carne'}
                          totalNumberOfMeatOptions={selectedMeat != undefined ? item.option : 0}  
                          getSelectedItems={(item)=> {setSelectedMeat(item)}}/>   
                        </Option>
                    : null}
                </Content>
            </OptionsList> 
            <TotalValueBar value={item.price} itemQuantity={item.quantity}
            getQuantity={(quantity)=>{item.type === 'quentinha' ? 
            packedLunch(quantity) : snack(quantity)}}/>
        </Container>
    )
}
