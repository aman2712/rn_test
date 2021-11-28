import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import AppHeader from './components/AppHeader';
import ListItem from './components/ListItem';
import ModalComponent from './components/ModalComponent';

const App = () => {
  const [data, setData] = useState(['Milk', 'Coffee', 'Oranges', 'Bread']);
  const [filteredData, setFilteredData] = useState([]);
  const [inputText, setInputText] = useState('');
  const [addItemText, setAddItemText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const renderItem = ({item, index}) => (
    <ListItem item={item} dataLength={filteredData.length - 1} index={index} />
  );

  const filterData = (arr, searchKey) => {
    return arr.filter(function (item) {
      var tempItem = item.toLowerCase();
      return tempItem.search(searchKey.toLowerCase()) != -1;
    });
  };

  const handleChange = e => {
    setInputText(e);
    setFilteredData(() => {
      return filterData(data, e);
    });
  };

  const handleAddChange = e => {
    setAddItemText(e);
  };

  const addData = () => {
    if(addItemText === '') return
    setData((prevData) => {
      return [...prevData, addItemText]
    })
    setAddItemText('')
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.app}>
      <FlatList
        data={filteredData}
        keyExtractor={item => filteredData.indexOf(item)}
        renderItem={renderItem}
        ListHeaderComponent={
          <AppHeader
            value={inputText}
            onChange={handleChange}
            setModalVisible={setModalVisible}
          />
        }
      />
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        value={addItemText}
        onChange={handleAddChange}
        addData={addData}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
});

export default App;
