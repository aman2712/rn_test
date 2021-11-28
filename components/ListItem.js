import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListItem = ({item, index, dataLength}) => {
  return (
    <View
      style={[
        {...styles.listItem},
        index === dataLength ? {borderBottomWidth: 0} : {borderBottomWidth: 1},
      ]}>
      <Text style={styles.listText}>{item}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#ccc',
  },
  listText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
});
