import React from 'react'
import { Category } from './Category'
import { View , Text} from 'react-native'


export const CategoryList = () => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

  return (
    <Category item={item} onPress={()=> selectedId(item.id)} 
        background={backgroundColor}
        textColor={color}
    /> 
     )
}
