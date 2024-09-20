import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Alert, Text } from 'react-native';
import { getSubSubCategories } from '../../utils/config';

const SideBar = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); // No default until data is fetched
  const [sidebarData, setSidebarData] = useState([]); // State for fetched sidebar data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch sub-sub-categories when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status, data } = await getSubSubCategories();
        if (status === 200 && data.length > 0) {
          setSidebarData(data);
          setSelectedCategory(data[0].sub_sub_category_id); // Set default to first item
        } else if (status === 200 && data.length === 0) {
          setError('No categories available');
        } else {
          throw new Error('Failed to fetch sub-sub-categories');
        }
      } catch (error) {
        setError(error.message);
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePress = (category) => {
    setSelectedCategory(category.sub_sub_category_id);
    onCategorySelect(category); // Notify parent component with selected category
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#007BFF" style={styles.loading} />;
  }

  if (error) {
    return <View style={styles.errorContainer}><Text>{error}</Text></View>;
  }

  // If no data, return null (don't render the sidebar)
  if (sidebarData.length === 0) {
    return null;
  }

  return (
    <View style={styles.sidebar}>
      {sidebarData.map((category) => (
        <TouchableOpacity
          key={category.sub_sub_category_id}
          style={[
            styles.imageContainer,
            selectedCategory === category.sub_sub_category_id && styles.selectedImage
          ]}
          onPress={() => handlePress(category)}
        >
          <Image
            source={{ uri: category.sub_sub_category_img }}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');
const sidebarWidth = width * 0.15; // Adjust this value if necessary

const styles = StyleSheet.create({
  sidebar: {
    width: sidebarWidth,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  imageContainer: {
    width: '100%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: '#007BFF', // Highlight color for selected image
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  errorContainer: {
    position:'absolute'
  },
});

export default SideBar;
