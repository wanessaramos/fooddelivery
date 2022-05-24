import React,{ useReducer } from 'react';
import Context from './src/context';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

const DATA = []

const initialState = {DATA};

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  function reducer(state,action){

    if(action.type === 'ADD'){

      const newItem = action.payload
  
      return{
        ...state,
        DATA: [...state.DATA, newItem],
      }

    }else if(action.type === 'UPDATE'){

      const updateItem = action.payload

      return{
        ...state,
        DATA: state.DATA.map(item => item.id === updateItem.id ? updateItem : item),
      }

    }else{

      return{
        ...state,
        DATA: state.DATA.filter(item => item.id !== itemId),
      }

    }
   
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  if(!fontsLoaded){
    return(
      <AppLoading/>
    ) 
  }

  return (
    <Context.Provider value={{state,dispatch}}>
        <Routes/>
    </Context.Provider>
  );
}


