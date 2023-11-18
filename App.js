import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import data from './AppData';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => toggleSelectedItem(item)}>
        <Text style={styles.item}>{item.nickname}</Text>
      </TouchableOpacity>

      {selectedItem === item && (
        <ScrollView style={styles.fullInfo}>
          <Text style={styles.fullInfoText}>Full Information</Text>
          <Text style={styles.infoDataTxt}>{`First Name: ${item.firstName}`}</Text>
          <Text style={styles.infoDataTxt}>{`Last Name: ${item.lastName}`}</Text>
          <Text style={styles.infoDataTxt}>{`Nickname: ${item.nickname}`}</Text>
          <Text style={styles.infoDataTxt}>{`Course: ${item.course}`}</Text>
          <Text style={styles.infoDataTxt}>{`Year: ${item.year}`}</Text>
        </ScrollView>
      )}
    </View>
  );

  const toggleSelectedItem = (item) => {
    setSelectedItem((prevSelectedItem) => (
      prevSelectedItem === item ? null : item
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nickname List</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E6E6FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#9932CC',
  },
  list: {
    marginBottom: 16,
  },
  item: {
    fontSize: 18,
    marginBottom: 8,
    backgroundColor: '#B19CD9',
    padding: 10,
    borderRadius: 10,
  },
  fullInfo: {
    backgroundColor: '#D8BFD8',
    padding: 16,
    borderRadius: 10,
    marginBottom: 5,
  },
  fullInfoText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoDataTxt: {
    fontSize: 17,
    fontFamily: 'Trebuchet MS',
  },
});

export default App;
