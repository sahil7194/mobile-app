import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Categories } from '../Stubs/Categories';

const DATA = Categories;

const Item = ({item, }) => (
  <TouchableOpacity  className="border border-green-500">
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

export const Home = () => {

  const renderItem = ({item}) => {
    return (
      <Item className="border border-red-500"
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        className="border border-red-500"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
