import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, TouchableHighlight} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

Date.prototype.formatted = function () {
  let day = this.getDay();
  let date = this.getDate();
  let month = this.getMonth();
  let year = this.getFullYear();
  let daysText = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let monthsText = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${daysText[day]}, ${monthsText[month]} ${date}, ${year}`;
};

export default class MainMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
    };
  }

  componentDidMount() {
    /*
     * In a real mobile app, we will fetch data from a data source
     * such as a file, database or from the cloud.
     *
     * In this demo, we simply hard-code the data here.
     */
    let foodList = [
      {
        id: 1,
        title: 'Thaipusam',
        date: new Date('01/31/2018'),
      },
      {
        id: 2,
        title: 'Chinese New Year',
        date: new Date('02/16/2018'),
      },
      {
        id: 3,
        title: 'Wesak',
        date: new Date('05/29/2018'),
      },
      {
        id: 4,
        title: 'Kaamatan',
        date: new Date('05/30/2018'),
      },
      {
        id: 5,
        title: 'Gawai Dayak',
        date: new Date('06/01/2018'),
      },
      {
        id: 6,
        title: 'Hari Raya Puasa',
        date: new Date('06/15/2018'),
      },
      {
        id: 7,
        title: 'Hari Raya Qurban',
        date: new Date('08/22/2018'),
      },
      {
        id: 8,
        title: 'Deepavali',
        date: new Date('11/06/2018'),
      },
      {
        id: 9,
        title: 'Christmas',
        date: new Date('12/25/2018'),
      },
    ];

    // Set the state 'festivals' with data "fetched" from data source
    this.setState({
      food: foodList,
    });
  }

  render() {
    return (
      <View style={{marginBottom: 0}}>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> */}
        <Text style={{fontSize: 30, textAlign: 'center'}}>LMEO Restaurant</Text>
        <FlatList
          data={this.state.food}
          showsVerticalScrollIndicator={true}
          renderItem={({item}) => (
            <TouchableHighlight
              underlayColor={'#cccccc'}
              onPress={() => {
                Alert.alert(`You pressed on Festival: ${item.title}`);
              }}>
              <View style={styles.item}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDate}>{item.date.formatted()}</Text>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={item => {
            return item.id.toString();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  itemDate: {
    fontSize: 18,
  },
});
