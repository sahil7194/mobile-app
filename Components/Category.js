import React from 'react'
import {   FlatList,   SafeAreaView,   StatusBar,   StyleSheet,  Text,   TouchableOpacity,} from 'react-native';

export const Category = ({item, onPress, backgroundColor, textColor}) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
      </TouchableOpacity>
    );
