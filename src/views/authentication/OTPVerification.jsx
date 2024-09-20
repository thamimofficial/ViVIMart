// OTPVerification.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';

const OTPVerification = ({ route, navigation }) => {
  const [otp, setOtp] = useState('');
  const { confirm } = route.params; // Get the confirmation object passed from SignIn

  // Function to verify OTP
  const confirmCode = async () => {
    try {
      await confirm.confirm(otp);
      Alert.alert('Success', 'Phone number verified successfully!');
      // You can navigate to another screen or home after successful verification
      navigation.navigate('Home'); // Replace 'Home' with your actual screen name
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Enter OTP</Text>
      <TextInput
        placeholder="OTP"
        keyboardType="number-pad"
        maxLength={6}
        style={{
          height: 50,
          borderColor: '#ddd',
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
          borderRadius: 5,
        }}
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Verify OTP" onPress={confirmCode} />
    </View>
  );
};

export default OTPVerification;
