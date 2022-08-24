import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import { InputWithLabel, BackButton } from '../UI';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                <BackButton title="Edit Profile" onPress={this.props.navigation.goBack}/>
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
                    <TouchableOpacity activeOpacity={0.5} onPress={this._alert_message} style={{ padding: 20 }}
                    >
                        <View style={styles.btnContainer}>
                            <Text style={styles.buttonTitle}>Save</Text>
                        </View>
                    </TouchableOpacity>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    detailsTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    TextLabel: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },

    TextInput: {
        fontSize: 22,
        marginTop: 5,
        marginLeft: 10,
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    btnContainer: {
        backgroundColor: 'pink',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
    },

});