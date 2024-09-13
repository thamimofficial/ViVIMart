import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-paper';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Icon name="search" size={24} color="#fff" />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#fff"
                />
            </View>
            <View style={styles.rightIconsContainer}>
                <TouchableOpacity style={styles.iconWrapper}>
                    <Badge
                        visible={true}
                        size={20}
                        style={styles.badge}
                    >
                        3
                    </Badge>
                    <Icon name="shopping-cart" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper}>
                    <Icon name="person" size={24} color="#fff" />
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
        paddingVertical: 5,
        justifyContent: 'space-between',
        paddingVertical:15
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
        right: -5,
        backgroundColor: '#f00', // Red badge color
    },
});

export default Header;
