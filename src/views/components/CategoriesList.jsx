import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Dummy data
const categories = [
    {
        id: 1,
        category_name: "Fruits & Vegetables",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/1 Fruits & Vegetables.png"
    },
    {
        id: 2,
        category_name: "Grocery",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/2 Grocery.png"
    },
    {
        id: 3,
        category_name: "Meat & Fish",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/3 Meat & Fish.png"
    },
    {
        id: 4,
        category_name: "Kitchenware",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/4 Kitchenware.png"
    },
    {
        id: 5,
        category_name: "Stationary",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/5 Stationary.png"
    },
    {
        id: 6,
        category_name: "Home Appliance",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/6 Home Appliance.png"
    },
    {
        id: 7,
        category_name: "Mobile and Accessories",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/7 Mobile and Accessories.png"
    },
    {
        id: 8,
        category_name: "Footwear",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/8 Footwear.png"
    },
    {
        id: 9,
        category_name: "Furniture",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/9 Furniture.png"
    },
    {
        id: 10,
        category_name: "Jewellery",
        category_img: "https://ik.imagekit.io/efsdltq0e/product_images/Category/10 Jewellery.png"
    }
];

const CategoriesList = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            {categories.map(category => (
                <View key={category.id} style={styles.categoryContainer}>
                    <Image source={{ uri: category.category_img }} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>{category.category_name}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    categoryContainer: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#ddd',
        overflow: 'hidden',
        marginBottom: 5,
    },
    categoryText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default CategoriesList;
