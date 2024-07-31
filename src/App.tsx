
import React, {useState} from 'react';

import {
  FlatList,
  SafeAreaView,
  
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import music_data from './music-data.json';
import styles from './Style';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';


function App(){
  const [list, setList] = useState([music_data]);

const renderSong = ({item}) => <SongCard song={item}/>;

const renderSeperator = () => <View style={styles.seperator}/>;

const handleSearch = text => {
  const filteredList = music_data.filter(song => {
    const searcedText= text.toLowerCase();
  const currentTitle= song.title.toLocaleLowerCase();

return currentTitle.indexOf(searcedText) > -1 ;
});

setList(filteredList);
};
 

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch}/>
      <View style={styles.container}>
        <FlatList 
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}/>
        </View>
     
    </SafeAreaView>
  );
}



export default App;
