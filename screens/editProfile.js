import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import { InputWithLabel } from '../UI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
        this._readUser = this._readUser.bind(this);
    }

    componentDidMount() {
        this._readUser();
    }

    _alert_message = () => {
        Alert.alert(
            'Confirm to edit ?', "Press Yes or No", [
            {
                text: 'Yes', onPress: () => {
                    this._saveSetting('email', this.state.email.toString());
                    this._saveSetting('password', this.state.password.toString());
                }
            },

            { text: 'No', onPress: () => { } },
        ],

            {
                cancelable: true
            }
        );
    }

    async _saveSetting(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('## ERROR SAVING ITEM ##: ', error);
        }
        this.props.route.params.refresh();
        this.props.navigation.navigate('viewProfile', { refresh: this._readUser });
    }

    async _readUser() {

        try {
            let keys = await AsyncStorage.multiGet(
                ['email', 'password'],
                (err, stores) => {
                    console.log(stores)
                    stores.map((result, i, store) => {
                        let key = store[i][0];
                        let value = store[i][1];
                        if (['email', 'password'].indexOf(key) != -1) {
                            if (key == 'email') {
                                this.setState({ email: value })
                            }
                            else if (key == 'password') {
                                this.setState({ password: value })
                            }
                        }
                    },
                    );
                }
            )
        } catch (error) {
            console.log('## ERROR READING ITEMS ##: ', error);
        }
    }


    render() {
        console.log(this.state.email)
        console.log(this.state.password)
        return (

            <ScrollView>
                <View style={styles.container}>
                    <InputWithLabel
                        textLabelStyle={styles.TextLabel}
                        textInputStyle={styles.TextInput}
                        label={'Email'}
                        onChangeText={(email) => {
                            this.setState({ email });

                        }}
                        value={this.state.email}
                        multiline={false}
                        orientation={'vertical'}>
                    </InputWithLabel>

                    <InputWithLabel
                        textLabelStyle={styles.TextLabel}
                        textInputStyle={styles.TextInput}
                        label={'Password'}
                        onChangeText={(password) => {
                            this.setState({ password });

                        }}
                        value={this.state.password}
                        multiline={false}
                        orientation={'vertical'}>
                    </InputWithLabel>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { this.props.navigation.goBack() }
                          } style={{padding: 20}}>
                            <View style={styles.btnContainer}>
                                <Text style={styles.buttonTitle}>Back</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} onPress={this._alert_message} style={{padding: 20}}
                        >
                            <View style={styles.btnContainer}>
                                <Text style={styles.buttonTitle}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                
            </ScrollView >
        );
    }
}



const styles = StyleSheet.create({
    TextLabel: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',

    },

    TextInput: {
        fontSize: 20,
        color: 'pink',
        lineHeight: 22,
        marginTop: 10,
    },

    buttonTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

    btnContainer: {
        backgroundColor: 'pink',
        height: 50,
        width: 150,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
    },

});