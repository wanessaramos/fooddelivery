import React,{ useState, useEffect } from 'react';
import { Container,
    Content,
    TitleContent,
    ItemTitle,
    ContentButton,
    ItemName,
    Button,
    ItemContent,
    LegendContent,
    ItemLegend} from './styles';

export default function RadioButtonList({data, title, getSelectedItem, selected}){

    const [selectedItem, setSelectedItem] = useState(0)

    useEffect(()=>{
        selected != null ? setSelectedItem(selected) : null
    },[selectedItem])

    const listOptions = () =>{
        return(
            data.map((item,index) =>{
              return( 
                  <Content key={index}>
                    <ContentButton>
                        <ContentButton>
                            <Button 
                            check={item.id === selectedItem.id ? true : false}
                            onPress={()=>{setSelectedItem(item),
                            getSelectedItem(item)}}/>   
                        </ContentButton>   
                    </ContentButton>
                    <ItemContent>
                        <ItemName>{item.name}</ItemName>
                    </ItemContent>
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
                    <ItemLegend>escolha 1 opção</ItemLegend>
                </LegendContent>
            </TitleContent>
            {listOptions()}
        </Container>    
    )
}