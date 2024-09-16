import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SubProduct from './components/SubProduct';

const { width } = Dimensions.get('window');
const sidebarWidth = width * 0.1; // 10% of the screen width

const ProductCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <SideBar onCategorySelect={handleCategorySelect} />
        <ScrollView style={[styles.scrollView, { marginLeft: sidebarWidth }]}>
          <SubProduct selectedCategory={selectedCategory} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flexDirection: 'row',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default ProductCard;
