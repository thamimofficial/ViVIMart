import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';
import SideBar from './components/SideBar';

const { width } = Dimensions.get('window');
const sidebarWidth = width * 0.1; // 10% of the screen width

const ProductCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log('selected sub category',selectedCategory)
  };

  const products = [
    {
      Product_id: 1121,
      Categories: "Fruits & Vegetables",
      Sub_Categories: "Fresh Fruits",
      Sub_Sub_Categories: "Bananas",
      Brand_name: "Fresho ",
      Product_name: "Banana Elaichi (Yellaki)",
      Prodouct_img_0: "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781388068_Prodouct_img_0_f0RiW7lCHd",
      Weight: "1.00",
      MRP: "250.00",
      sell_price: "225.00",
      offer: "62.50",
      delivery_option: "Standard Delivery",
    },
    {
      Product_id: 1122,
      Categories: "Fruits & Vegetables",
      Sub_Categories: "Fresh Fruits",
      Sub_Sub_Categories: "Bananas",
      Brand_name: "Fresho",
      Product_name: "Banana Red (Sevvalai)",
      Prodouct_img_0: "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781399710_Prodouct_img_0_5HulxFeEQ",
      Weight: "1.00",
      MRP: "250.00",
      sell_price: "225.00",
      offer: "62.50",
      delivery_option: "Standard Delivery",
    },
    {
      Product_id: 1123,
      Categories: "Fruits & Vegetables",
      Sub_Categories: "Fresh Fruits",
      Sub_Sub_Categories: "Bananas",
      Brand_name: "Fresho",
      Product_name: "Banana Robusta (Morris)",
      Prodouct_img_0: "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781411440_Prodouct_img_0_Xk3jSHL89s",
      Weight: "1.00",
      MRP: "250.00",
      sell_price: "225.00",
      offer: "62.50",
      delivery_option: "Standard Delivery",
    },
    {
      Product_id: 1124,
      Categories: "Fruits & Vegetables",
      Sub_Categories: "Fresh Fruits",
      Sub_Sub_Categories: "Bananas",
      Brand_name: "Fresho",
      Product_name: "Banana Nenthiran",
      Prodouct_img_0: "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781422944_Prodouct_img_0_vHce3x8qXT",
      Weight: "1.00",
      MRP: "250.00",
      sell_price: "225.00",
      offer: "62.50",
      delivery_option: "Standard Delivery",
    }
  ];

  const SubProduct = () => {
    return (
      <View style={styles.subProductContainer}>
        {products.map((product) => (
          <ProductItem key={product.Product_id} product={product} />
        ))}
      </View>
    );
  };

  const ProductItem = ({ product }) => {
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => {
      if (quantity > 0) setQuantity(prev => prev - 1);
    };

    return (
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SingleProduct', { product })}>
        
        <Text style={styles.productOffer}>${product.offer}</Text>
        <Image source={{ uri: product.Prodouct_img_0 }} style={styles.image} />
        
        <View style={styles.details}>
          <Text style={styles.productName} numberOfLines={1}>{product.Product_name}</Text>
          <Text style={styles.productPrice}>${product.sell_price}</Text>
          <Text style={styles.deliveryOption}>{product.delivery_option}</Text>

          {quantity === 0 ? (
            <TouchableOpacity style={styles.addButton} onPress={incrementQuantity}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  ProductItem.propTypes = {
    product: PropTypes.shape({
      Prodouct_img_0: PropTypes.string.isRequired,
      Product_name: PropTypes.string.isRequired,
      sell_price: PropTypes.string.isRequired,
      offer: PropTypes.string.isRequired,
      delivery_option: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <SideBar onCategorySelect={handleCategorySelect} />
        <ScrollView style={[styles.scrollView, { marginLeft: 0 }]}>
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
  subProductContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 15,
    overflow: 'hidden',
    width: '48%', // Adjust width to 48% to allow two cards per row with spacing
    marginHorizontal: '1%', // Add horizontal margin to create space between the cards
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  details: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#28a745',
    marginBottom: 5,
  },
  productOffer: {
    fontSize: 10,
    color: '#dc3545',
    marginBottom: 5,
    backgroundColor:"green",
    color:'white',
    fontWeight:'700',
    position:'absolute',
    zIndex:1,
    borderRadius:5,
    padding:3,
    margin:2
  },
  deliveryOption: {
    fontSize: 10,
    color: '#6c757d',
    backgroundColor: '#fecaca',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  quantityText: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductCard;
