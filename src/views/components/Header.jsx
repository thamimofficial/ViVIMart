import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing Ionicons

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Ionicons name="search-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#fff"
                />
            </View>
            <View style={styles.rightIconsContainer}>
                <TouchableOpacity style={styles.iconWrapper}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>3</Text>
                    </View>
                    <Ionicons name="cart-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper}>
                    <Ionicons name="person-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1476bc', // Header background color
        paddingHorizontal: 10,
        paddingVertical: 15,
        justifyContent: 'space-between',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#031522', // Darker gray for the search input
        color: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginLeft: 10,
        height: 40,
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrapper: {
        marginLeft: 15,
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -10,
        backgroundColor: '#f00', // Red badge color
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Header;
