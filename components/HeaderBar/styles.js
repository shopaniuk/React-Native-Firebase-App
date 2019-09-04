import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#009051',
    height: 80,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  }
})
