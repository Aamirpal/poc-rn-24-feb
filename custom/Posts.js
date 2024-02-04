import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getPosts } from './api';

const Posts = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await getPosts();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>Title: {item.title}</Text>
              <Text style={styles.body}>Body: {item.body}</Text>
              <Text style={styles.userId}>User ID: {item.userId}</Text>
              <Text style={styles.id}>ID: {item.id}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.centeredText}>Loading...</Text>
      )}
      <Button title="Refresh" onPress={fetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  userId: {
    fontSize: 14,
    color: 'gray',
  },
  id: {
    fontSize: 14,
    color: 'gray',
  },
  centeredText: {
    textAlign: 'center',
  },
});

export default Posts;
