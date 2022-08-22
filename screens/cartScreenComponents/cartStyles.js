import {
    StyleSheet
  } from 'react-native';
  
  export const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'flex-start',
      },
      item: {
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
      },
      itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
      },
      buttonText: {
        padding: 20,
        color: 'white'
      },
      header: {
        backgroundColor : 'red',
        fontSize : 24,
        fontWeight: 'bold',
        padding: 10,
        color: '#fff',
      },
      itemName: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      input: {
        fontSize: 20,
        height: 48,
        color: 'black',
        borderBottomWidth: 2,
        borderBottomColor: 'red',
      },

    });