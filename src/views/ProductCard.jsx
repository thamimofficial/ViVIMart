import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { getSubSubCategoriesProduct } from '../utils/config';

const { width } = Dimensions.get('window');
const sidebarWidth = width * 0.1; // 10% of the screen width

const ProductCard = () => {
  const route = useRoute();
  const { productDetails } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(productDetails.Sub_Categories);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCategorySelect = async (category) => {
    if (category && category.sub_sub_category_name) {
      setSelectedCategory(category);
      console.log('Selected sub category:', category);
  
      // Fetch products for the selected category
      await fetchProducts(category);
    } else {
      console.error('Invalid category selected:', category);
    }
  };
  const fetchProducts = async (category) => {
    try {
      setLoading(true);
      const response = await getSubSubCategoriesProduct(category.sub_sub_category_name);
      if (response.status === 200) {
        setProducts(response.data); // Assuming response.data contains the product list
        console.log('sub sub category products:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, []);

  const SkeletonLoader = () => (
    <View style={styles.skeletonContainer}>
      {Array.from({ length: 4 }).map((_, index) => (
        <View key={index} style={styles.skeletonCard}>
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonText} />
          <View style={styles.skeletonText} />
        </View>
      ))}
    </View>
  );

  const SubProduct = () => {
    if (loading) {
      return <SkeletonLoader />; // Show skeleton loader
    }

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
          <SubProduct />
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
    backgroundColor: "green",
    color: 'white',
    fontWeight: '700',
    position: 'absolute',
    zIndex: 1,
    borderRadius: 5,
    padding: 3,
    margin: 2,
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
    paddingVertical: 5,
    paddingHorizontal:10,
    
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
  skeletonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  skeletonCard: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    width: '48%',
    height: 150,
    marginBottom: 15,
    marginHorizontal: '1%',
  },
  skeletonImage: {
    backgroundColor: '#c0c0c0',
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  skeletonText: {
    backgroundColor: '#c0c0c0',
    height: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '80%',
  },
});

export default ProductCard;
