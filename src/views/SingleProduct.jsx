// SingleProduct.jsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const SingleProduct = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.Prodouct_img_0 }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{product.Product_name}</Text>
        <Text style={styles.productPrice}>Price: ${product.sell_price}</Text>
        <Text style={styles.productOffer}>Offer: ${product.offer}</Text>
        <Text style={styles.deliveryOption}>Delivery Option: {product.delivery_option}</Text>
        <Text style={styles.aboutProduct}>{product.About_Product}</Text>
        <Text style={styles.benefits}>Benefits: {product.Benefits}</Text>
        <Text style={styles.storage}>Storage and Uses: {product.Storage_and_Uses}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  details: {
    padding: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#28a745',
    marginBottom: 10,
  },
  productOffer: {
    fontSize: 18,
    color: '#dc3545',
    marginBottom: 10,
  },
  deliveryOption: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 10,
  },
  aboutProduct: {
    fontSize: 16,
    marginBottom: 10,
  },
  benefits: {
    fontSize: 16,
    marginBottom: 10,
  },
  storage: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SingleProduct;
