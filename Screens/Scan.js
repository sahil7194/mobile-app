import React from 'react'
import { View, Text } from 'react-native'
import {   SafeAreaProvider,   useSafeAreaInsets, } from 'react-native-safe-area-context';

export const Scan = () => {
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
        <Text className="p-2" >This is Scan Screen </Text>
    
      </View>

    </SafeAreaProvider>
  )
}

