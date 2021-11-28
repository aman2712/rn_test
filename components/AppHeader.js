import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import Input from './Input';

const AppHeader = ({value, onChange, setModalVisible}) => {
  return (
    <View style={styles.appHeader}>
      <Input value={value} onChange={onChange} />
      <Button setModalVisible={setModalVisible} />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  appHeader: {
    flexDirection: 'row',
    marginBottom: 20
  },
});
