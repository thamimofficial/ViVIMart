import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import CategoriesList from './components/CategoriesList';
import Header from './components/Header';
import { getSubCategories } from '../utils/config';

// Get screen width
const { width: screenWidth } = Dimensions.get('window');

// Calculate card width based on screen width and 4 columns (adjusted for margins)
const cardMargin = 0; // Margin around each card
const numberOfColumns = 4; // Number of cards per row
const cardWidth = (screenWidth - (cardMargin * (numberOfColumns + 1))) / numberOfColumns; // Adjust for margins

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to store selected category
  const [subCategoriesData, setSubCategoriesData] = useState([]); // State for sub-categories data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (selectedCategory) {
      fetchSubCategories();
    }
  }, [selectedCategory]);

  const fetchSubCategories = async () => {
    setLoading(true);
    try {
      const { status, data } = await getSubCategories();
      if (status === 200) {
        setSubCategoriesData(data); // Assuming data is directly the list of sub-categories
      } else {
        throw new Error(`Unexpected status code: ${status}`);
      }
    } catch (error) {
      setError(error.message);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log('selectedCategory',selectedCategory)
  // Group sub-categories by their category_name
  const groupedSubCategories = subCategoriesData.reduce((acc, subCategory) => {
    if (!acc[subCategory.category_name]) {
      acc[subCategory.category_name] = [];
    }
    acc[subCategory.category_name].push(subCategory);
    return acc;
  }, {});

  // Create a combined data array for rendering
  const categories = Object.keys(groupedSubCategories);

  const renderCategory = (categoryName) => {
    const categoryItems = groupedSubCategories[categoryName];
    return (
      <View key={categoryName} style={styles.categoryWrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.categoryHeading}>{categoryName}</Text>
        </View>
        <View style={styles.cardsContainer}>
          {categoryItems.map((item, index) => (
            <TouchableOpacity key={index} style={[styles.card, { width: cardWidth }]}>
              <Image source={{ uri: item.sub_category_img }} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.sub_category_name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.categoryContainer}>
        <CategoriesList onCategorySelect={setSelectedCategory} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        {categories.map(renderCategory)}
      </ScrollView>

      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  categoryWrapper: {
    marginBottom: 20,
  },
  headerContainer: {
    alignItems: 'flex-start', // Align header to the right
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  categoryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingHorizontal: cardMargin,
  },
  card: {
    backgroundColor: '#fff',
    margin: cardMargin,
    paddingVertical: 5,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 60, // Adjust height for responsiveness
    marginBottom: 5,
    resizeMode: 'contain',
    borderRadius:50
  },
  cardText: {
    fontSize: 12, // Smaller font size for responsiveness
    textAlign: 'center',
  },
  scrollViewContainer: {
    paddingHorizontal: cardMargin, // Adjust container padding
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginVertical: 10,
  },
});

export default Home;
