// Import library to create component
import React from 'react';
import {View, Text, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList/>
        </View>
    );
};

// Render to device
AppRegistry.registerComponent('albums', ()=> App);