// SubProduct.jsx
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.Prodouct_img_0 }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{product.Product_name}</Text>
        <Text style={styles.productPrice}>${product.sell_price}</Text>
        <Text style={styles.productOffer}>Offer: ${product.offer}</Text>
        <Text style={styles.deliveryOption}>Delivery Option: {product.delivery_option}</Text>
      </View>
    </View>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    Prodouct_img_0: PropTypes.string.isRequired,
    Product_name: PropTypes.string.isRequired,
    sell_price: PropTypes.string.isRequired,
    offer: PropTypes.string.isRequired,
    delivery_option: PropTypes.string.isRequired,
  }).isRequired,
};

const SubProduct = () => {
  // Example data, replace with your actual data source
  const products = [
    {
        "Product_id": 1121,
        "Categories": "Fruits & Vegetables",
        "Sub_Categories": "Fresh Fruits",
        "Sub_Sub_Categories": "Bananas",
        "Brand_name": "Fresho ",
        "Product_name": "Banana Elaichi (Yellaki)",
        "Prodouct_img_0": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781388068_Prodouct_img_0_f0RiW7lCHd",
        "Prodouct_img_1": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781390576_Prodouct_img_1_DiNImFAWX",
        "Prodouct_img_2": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781392795_Prodouct_img_2_Q4UYobNqq",
        "Prodouct_img_3": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781395074_Prodouct_img_3_MLb68msrk",
        "Prodouct_img_4": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781397198_Prodouct_img_4_ZEwaXSRpF",
        "Weight": "1.00",
        "MRP": "250.00",
        "sell_price": "225.00",
        "offer": "62.50",
        "you_save": "25.00",
        "kind": "veg",
        "exp_date": null,
        "About_Product": "Kiran Watermelon, a hydrating delight, offers a burst of sweetness and juiciness. Whether in slices or as part of fruit bowls, it embodies the essence of summer",
        "Benefits": "an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids.",
        "Storage_and_Uses": "Keep in a cool, shaded area or in the refrigerator.\r\n",
        "delivery_option": "Standard Delivery"
    },
    {
        "Product_id": 1122,
        "Categories": "Fruits & Vegetables",
        "Sub_Categories": "Fresh Fruits",
        "Sub_Sub_Categories": "Bananas",
        "Brand_name": "Fresho",
        "Product_name": "Banana Red (Sevvalai)",
        "Prodouct_img_0": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781399710_Prodouct_img_0_5HulxFeEQ",
        "Prodouct_img_1": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781402151_Prodouct_img_1_xY9aKcAJp",
        "Prodouct_img_2": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781404415_Prodouct_img_2_hoL47q7o7",
        "Prodouct_img_3": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781406657_Prodouct_img_3_MWJRVvA4i",
        "Prodouct_img_4": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781408975_Prodouct_img_4_n8GdvfNrs",
        "Weight": "1.00",
        "MRP": "250.00",
        "sell_price": "225.00",
        "offer": "62.50",
        "you_save": "25.00",
        "kind": "veg",
        "exp_date": null,
        "About_Product": "Kiran Watermelon, a hydrating delight, offers a burst of sweetness and juiciness. Whether in slices or as part of fruit bowls, it embodies the essence of summer",
        "Benefits": "an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids.",
        "Storage_and_Uses": "Keep in a cool, shaded area or in the refrigerator.\r\n",
        "delivery_option": "Standard Delivery"
    },
    {
        "Product_id": 1123,
        "Categories": "Fruits & Vegetables",
        "Sub_Categories": "Fresh Fruits",
        "Sub_Sub_Categories": "Bananas",
        "Brand_name": "Fresho",
        "Product_name": "Banana Robusta (Morris)",
        "Prodouct_img_0": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781411440_Prodouct_img_0_Xk3jSHL89s",
        "Prodouct_img_1": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781413952_Prodouct_img_1_czB5_NvbG",
        "Prodouct_img_2": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781416108_Prodouct_img_2_3pgW8CJ80v",
        "Prodouct_img_3": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781418415_Prodouct_img_3_zrgjnHk6AZ",
        "Prodouct_img_4": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781420608_Prodouct_img_4_Wmwx1uM2gm",
        "Weight": "1.00",
        "MRP": "250.00",
        "sell_price": "225.00",
        "offer": "62.50",
        "you_save": "25.00",
        "kind": "veg",
        "exp_date": null,
        "About_Product": "Kiran Watermelon, a hydrating delight, offers a burst of sweetness and juiciness. Whether in slices or as part of fruit bowls, it embodies the essence of summer",
        "Benefits": "an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids.",
        "Storage_and_Uses": "Keep in a cool, shaded area or in the refrigerator.\r\n",
        "delivery_option": "Standard Delivery"
    },
    {
        "Product_id": 1124,
        "Categories": "Fruits & Vegetables",
        "Sub_Categories": "Fresh Fruits",
        "Sub_Sub_Categories": "Bananas",
        "Brand_name": "Fresho",
        "Product_name": "Banana Nenthiran",
        "Prodouct_img_0": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781422944_Prodouct_img_0_vHce3x8qXT",
        "Prodouct_img_1": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781425516_Prodouct_img_1_wC8CGPemfx",
        "Prodouct_img_2": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781427620_Prodouct_img_2_kZEO41Eng7",
        "Prodouct_img_3": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781429966_Prodouct_img_3_lSFWLnelrq",
        "Prodouct_img_4": "https://ik.imagekit.io/efsdltq0e/product_images/product_1720781432250_Prodouct_img_4_s7jXuEO-W",
        "Weight": "1.00",
        "MRP": "250.00",
        "sell_price": "225.00",
        "offer": "62.50",
        "you_save": "25.00",
        "kind": "veg",
        "exp_date": null,
        "About_Product": "Kiran Watermelon, a hydrating delight, offers a burst of sweetness and juiciness. Whether in slices or as part of fruit bowls, it embodies the essence of summer",
        "Benefits": "an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids.",
        "Storage_and_Uses": "Keep in a cool, shaded area or in the refrigerator.\r\n",
        "delivery_option": "Standard Delivery"
    }]

  return (
    <View style={styles.container}>
      {products.map(product => (
        <ProductCard key={product.Product_id} product={product} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:10,
    backgroundColor: '#f5f5f5',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
    overflow: 'hidden',
    width:'45%',
    margin:5
  },
  image: {
    width: 100,
    height: 100,
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
    fontSize: 14,
    color: '#dc3545',
    marginBottom: 5,
  },
  deliveryOption: {
    fontSize: 12,
    color: '#6c757d',
    backgroundColor:"yellow",
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:3
  },
});

export default SubProduct;
