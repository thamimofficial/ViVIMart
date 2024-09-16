import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Sample data
const sidebarData = [
  {
    sub_category_id: 1,
    sub_category_name: 'Fresh Fruits',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Sub Category /1_1 Fresh Fruits.png',
    category_name: 'Fruits & Vegetables',
    category_id: 1,
  },
  {
    sub_category_id: 2,
    sub_category_name: 'Fresh Vegetables',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Sub Category /1_2 Fresh Vegetables.png',
    category_name: 'Fruits & Vegetables',
    category_id: 1,
  },
  {
    sub_category_id: 3,
    sub_category_name: 'Exotic Fruits',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Sub Category /Exotic  Fruits.png',
    category_name: 'Fruits & Vegetables',
    category_id: 1,
  },
  {
    sub_category_id: 4,
    sub_category_name: 'Exotic Vegetables',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Sub Category /Exotic Vegetables.png',
    category_name: 'Fruits & Vegetables',
    category_id: 1,
  },
  {
    sub_category_id: 5,
    sub_category_name: 'Leafy Vegetables',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Sub Category /Leafy Vegetables.png',
    category_name: 'Fruits & Vegetables',
    category_id: 1,
  },
  {
    sub_category_id: 6,
    sub_category_name: 'Fresh Fruits',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Category/3 Meat & Fish.png',
    category_name: 'Grocery',
    category_id: 2,
  },
  {
    sub_category_id: 7,
    sub_category_name: 'Dairy Products',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Category/3 Meat & Fish.png',
    category_name: 'Grocery',
    category_id: 2,
  },
  {
    sub_category_id: 8,
    sub_category_name: 'Fresh Fish',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Category/3 Meat & Fish.png',
    category_name: 'Meat & Fish',
    category_id: 3,
  },
  {
    sub_category_id: 9,
    sub_category_name: 'Meat Cuts',
    sub_category_img: 'https://ik.imagekit.io/efsdltq0e/product_images/Category/3 Meat & Fish.png',
    category_name: 'Meat & Fish',
    category_id: 3,
  }
];

const SideBar = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(sidebarData[0].sub_category_id); // Default to first item

  const handlePress = (category) => {
    setSelectedCategory(category.sub_category_id);
    onCategorySelect(category); // Notify parent component
  };

  return (
    <View style={styles.sidebar}>
      {sidebarData.map((category) => (
        <TouchableOpacity
          key={category.sub_category_id}
          style={[
            styles.imageContainer,
            selectedCategory === category.sub_category_id && styles.selectedImage
          ]}
          onPress={() => handlePress(category)}
        >
          <Image
            source={{ uri: category.sub_category_img }}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');
const sidebarWidth = width * 0.15; // 10% of the screen width

const styles = StyleSheet.create({
  sidebar: {
    width: sidebarWidth,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  imageContainer: {
    width: '90%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    padding:5
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: '#007BFF', // Highlight color
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default SideBar;
