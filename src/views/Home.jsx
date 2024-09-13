import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoriesList from './components/CategoriesList';
import Header from './components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Custom Header */}

      <View style={{ marginBottom: 10 }}>
        <CategoriesList />
      </View>
      
      {/* ScrollView for Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Product Cards */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{ uri: 'https://via.placeholder.com/150' }} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Fresh Fruits</Text>
            <Text style={styles.cardParagraph}>Get the freshest fruits delivered to your door.</Text>
          </View>
          <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
            <Icon name="cart" size={20} color="#fff" />
            <Text style={styles.cardButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image style={styles.cardImage} source={{ uri: 'https://via.placeholder.com/150' }} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Organic Vegetables</Text>
            <Text style={styles.cardParagraph}>Healthy and organic vegetables just for you.</Text>
          </View>
          <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
            <Icon name="cart" size={20} color="#fff" />
            <Text style={styles.cardButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Bottom Action Buttons */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => {}}>
          <Icon name="home" size={20} color="#000" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => {}}>
          <Icon name="shopping" size={20} color="#000" />
          <Text>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => {}}>
          <Icon name="account" size={20} color="#000" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 10,
  },
  card: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4, // Shadow for Android
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardParagraph: {
    fontSize: 14,
    color: '#666',
  },
  cardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1476bc',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  cardButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  bottomButton: {
    alignItems: 'center',
  },
});

export default Home;
