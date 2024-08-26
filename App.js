import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { firebaseAnalytics, firebaseCrashlytics, logScreenView } from './firebase';

const App = () => {
  useEffect(() => {
    if (firebaseAnalytics) {
      logScreenView('ProfileScreen', 'ProfileScreenComponent');
      console.log('Firebase Analytics initialized');
    } else {
      console.error('firebaseAnalytics is not defined');
    }
    if (firebaseCrashlytics) {
      console.log('Firebase Crashlytics initialized');
      try {
        // Intentional error for testing Crashlytics
        throw new Error('Test Crash');
      } catch (error) {
        firebaseCrashlytics.recordError(error);
      }
    } else {
      console.error('firebaseCrashlytics is not defined');
    }
  }, []);

  return (
    <View>
      <Text>Welcome to Firebase!</Text>
    </View>
  );
};

export default App;
