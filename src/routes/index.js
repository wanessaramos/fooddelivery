import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import ItemView from '../pages/ItemView';
import CartButton from '../components/CartButton';
import LoadingOrder from '../pages/LoadingOrder';
import Cart from '../pages/Cart';
import colors from '../assets/styles/colors';
import fonts from '../assets/styles/fonts';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
             <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Food Delivery',
                    headerTitleStyle: {
                    color: `${colors.dimGray}`,
                    fontFamily:`${fonts.text}`,
                    },
                    headerRight: () => (
                        <CartButton/>
                      ),
                }} 
                />
                <Stack.Screen
                name='ItemView'
                component={ItemView}
                options={{
                    headerShown: false,
                    headerOption:false,
                    headerTransparent:true,
                    headerBackTitleVisible:false,
                }}
                />
                <Stack.Screen
                name='Cart'
                component={Cart}
                options={{
                    headerShown: false,
                    headerOption:false,
                    headerTransparent:true,
                    headerBackTitleVisible:false,
                }}
                />
                 <Stack.Screen
                name='LoadingOrder'
                component={LoadingOrder}
                options={{
                    headerShown: false,
                    headerOption:false,
                    headerTransparent:true,
                    headerBackTitleVisible:false,
                }}
                />
             </Stack.Navigator>
        </NavigationContainer>
    )
}