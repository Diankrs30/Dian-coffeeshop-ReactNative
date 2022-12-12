import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import styles from './style';

export default function SearchName(props) {
  const [textSearch, setTextSearch] = useState(props.searchName);

  const handleSearch = text => {
    setTextSearch(text);
    // props.search({text});
  };

  return (
    <View style={styles.wrapperSearch}>
      <FontAwesome icon={SolidIcons.search} style={styles.iconSearch} />
      <TextInput
        style={styles.textPlaceholder}
        placeholder="Search"
        placeholderTextColor="d#BCBABA"
        onChangeText={text => handleSearch(text)}
        onEndEditing={() => props.search(textSearch)}
      />
    </View>
  );
}
