/* eslint-disable react/jsx-key */

import React from 'react';
import { View, Text } from 'react-native';
import { useBoard } from './useBoard';

const Minesweeper = () => {
  const grid = useBoard();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {grid.map((row) => (
        <View>
          {row.map((item) => (
            <View
              key={item.key}
              style={{
                width: 20,
                height: 20,
                borderColor: 'blue',
                backgroundColor: 'red',
                margin: 1,
              }}>
              {item.isMine ? <Text>X</Text> : <Text>O</Text>}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Minesweeper;
