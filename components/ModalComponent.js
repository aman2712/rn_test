import React from 'react';
import {StyleSheet, Text, View, Modal, TextInput, Button} from 'react-native';

const ModalComponent = ({modalVisible, setModalVisible, addData, value, onChange}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Data</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Item"
            placeholderTextColor="#ccc"
            value={value}
            onChangeText={onChange}
          />
          <View style={styles.buttonGroup}>
            <Button title="Add" onPress={addData} />
            <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    marginTop: 200,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 22,
    marginBottom: 17,
    textAlign: 'center',
    fontWeight: '700',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 17,
    color: 'black'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  }
});
