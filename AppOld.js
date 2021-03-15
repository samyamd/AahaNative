import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';

export default function App() {
  return (
    <ScrollView>
    <Home />
    </ScrollView>
  );
}
