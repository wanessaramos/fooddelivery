import React, { useState } from 'react';
import { Container } from './styles';
import Catalog from '../../components/Catalog';
import Menu from '../../components/Menu';

export default function Home(){

    const [menuIndex, setMenuIndex] = useState(0);
    const [sectionIndex, setSectionIndex] = useState(0);

    const getIndexMenu = (index) =>{
        setMenuIndex(index);
    }

    const getIndexSection = (index) =>{
        setSectionIndex(index)
    }

    return(
        <Container>
            <Menu navigateMenu={getIndexMenu} sectionIndex={sectionIndex}/>
            <Catalog sectionIndex={menuIndex} navigateSection={getIndexSection}/>
        </Container>
    )
}
