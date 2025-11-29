import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
} from 'react-native';

function App(): React.JSX.Element {
  const [message, setMessage] = useState('Welcome to VibeCoding');

  const handlePress = () => {
    setMessage('Hi! The blocker is ready to be built.');
    Alert.alert('VibeCoding', 'Hi! System operational.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <View style={styles.content}>
        {/* Title / Header */}
        <Text style={styles.title}>VibeCoding</Text>
        <Text style={styles.subtitle}>Social Feed Blocker</Text>

        {/* The Dynamic Message */}
        <View style={styles.card}>
          <Text style={styles.messageText}>{message}</Text>
        </View>

        {/* The Button you asked for */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark mode background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00D1FF', // Cyan neon
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 40,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 12,
    marginBottom: 40,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  messageText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00D1FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5, // Android shadow
    shadowColor: '#00D1FF', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;