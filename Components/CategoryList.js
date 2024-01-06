import React from 'react'
import { Category } from '../Components/Category';

export const CategoryList = ({item}) => {
  return (
    <Category
    item={item}
    onPress={() => console.log(item.id)}
  />
  )
}
