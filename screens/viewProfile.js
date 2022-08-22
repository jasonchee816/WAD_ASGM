import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Button } from 'react-native';
import { InputWithLabel } from '../UI';
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

            <ScrollView style={styles.container}>
                <View>
                    <InputWithLabel style={styles.input}
                        label={'Email'}
                        value={this.state.email}
                        orientation={'vertical'}
                        editable={false}>
                    </InputWithLabel>

                    <InputWithLabel style={styles.input}
                        label={'Password'}
                        value={this.state.password}
                        orientation={'vertical'}
                        editable={false}>
                    </InputWithLabel>

                    <Button
                        title="Change Password"
                        onPress={() => {this.props.navigation.navigate('editProfile', {refresh : this._readUser})}
                        }
                        
                    ></Button>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 60,
    },
    switchLabel: {
        flex: 4,
        fontSize: 20,
        margin: 10,
    },
    switch: {
        flex: 1,
        margin: 10,
    },
    pickerContainer: {
        flexDirection: 'column',
    },
    pickerLabel: {
        fontSize: 20,
        margin: 10,
    },
    picker: {
        margin: 10,
    },
});