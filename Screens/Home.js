import React from 'react';
import {  FlatList,   SafeAreaView,   StatusBar, } from 'react-native';
import { Categories } from '../Stubs/Categories';
import { CategoryList } from '../Components/CategoryList';

const DATA = Categories;

export const Home = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <FlatList
        data={DATA}
        renderItem={CategoryList}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

