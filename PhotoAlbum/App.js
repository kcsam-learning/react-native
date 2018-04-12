import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <ScrollView>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </ScrollView>
);

export default App;
