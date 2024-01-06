import React from 'react'
import {  Text,  TouchableOpacity,} from 'react-native';

export const Category = ({item}) => {
  return (
    <TouchableOpacity  className="border border-pink-500 w-1/5">
    <Text>{item.name}</Text>
  </TouchableOpacity>
  )
}
