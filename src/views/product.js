// Product.jsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const ProductCard = ({ name, image }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle} numberOfLines={2}>{name}</Text>
    </View>
  </View>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Products = ({ groupedProducts, loading }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {loading ? (
        <Text>Loading...</Text> // Replace with ActivityIndicator if needed
      ) : (
        <View style={styles.cardsContainer}>
          {Object.keys(groupedProducts).length > 0 ? (
            Object.keys(groupedProducts).map(subCategory => (
              <View key={subCategory}>
                <Text style={styles.subCategoryTitle}>{subCategory}</Text>
                <View style={styles.productGrid}>
                  {groupedProducts[subCategory].map(product => (
                    <ProductCard
                      key={product.Product_id}
                      name={product.Product_name}
                      image={product.Prodouct_img_0}
                    />
                  ))}
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noProductsText}>No products available</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  cardsContainer: {
    flexDirection: 'column',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20, // Space between subcategory groups
  },
  card: {
    width: '23%',
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginRight: 7,
  },
  cardImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  cardContent: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subCategoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noProductsText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

Products.propTypes = {
  groupedProducts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Products;
