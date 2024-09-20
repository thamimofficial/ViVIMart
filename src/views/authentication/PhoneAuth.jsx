// SignIn.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneAuth = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);

  // Function to handle phone number input and send OTP
  const signInWithPhoneNumber = async () => {
    if (phoneNumber.length !== 10) {
      Alert.alert('Error', 'Phone number must be 10 digits long');
      return;
    }

    try {
      const confirmation = await auth().signInWithPhoneNumber(`+91${phoneNumber}`);
      setConfirm(confirmation);
      navigation.navigate('OTPVerification', { confirm: confirmation });
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP. Try again later.');
      console.log(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Enter Phone Number</Text>
      <TextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
        style={{
          height: 50,
          borderColor: '#ddd',
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
          borderRadius: 5,
        }}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Get OTP" onPress={signInWithPhoneNumber} />
    </View>
  );
};

export default PhoneAuth;
