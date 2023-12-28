import React from 'react'
import { View , Text } from 'react-native'
import { Searchbar } from 'react-native-paper';

export const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query)
    console.log(query);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  )
}