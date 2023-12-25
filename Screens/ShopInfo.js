import React from 'react'
import { View, Text } from 'react-native'
import {   SafeAreaProvider,   useSafeAreaInsets, } from 'react-native-safe-area-context';

export const ShopInfo = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <Text className="p-2" >This is ShopInfo Screen </Text>
    
      </View>

    </SafeAreaProvider>
  )
}

