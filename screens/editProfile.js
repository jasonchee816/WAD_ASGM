import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import { InputWithLabel, BackButton } from '../UI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { checkEmailValidity } from '../helpers/checkEmailValidity';
import { LoginValidator } from '../helpers/LoginValidator';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            async_password: '',
            password: '',
            newPassword: '',
        };
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
                    this._deleteSetting('password');
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

    // _validate_pwd(){
    //     if(this.state.password == this.state.async_password){
    //         this._alert_message
    //     }else{
    //         Alert.alert('Error Message', 'Old Password is not match!!!' )
    //     }
    // }

    async _deleteSetting() {
        try {
            await AsyncStorage.removeItem('password');
            this._saveSetting('password', this.state.newPassword.toString());
        } catch (error) {
            console.log('## ERROR DELETING ITEM##: ', error)
        }
    }

    async _readUser() {

        try {
            let async_password = await AsyncStorage.getItem('password');
            if (async_password !== null) {
                this.setState({ aync_password: async_password })
            }
        } catch (error) {
            console.log('## ERROR READING ITEMS ##: ', error);
        }
    }


    render() {
        return (
            <ScrollView>
                <BackButton title="  Edit Profile" onPress={this.props.navigation.goBack}/>
                <View style={styles.container}>
                    <InputWithLabel
                        textLabelStyle={styles.TextLabel}
                        textInputStyle={styles.TextInput}
                        label={'Old Password'}
                        onChangeText={text => {
                            this.setState({ password: text });
                        }}
                        value={this.state.password}
                        secureTextEntry
                        orientation={'vertical'}>
                    </InputWithLabel>

                    <InputWithLabel
                        textLabelStyle={styles.TextLabel}
                        textInputStyle={styles.TextInput}
                        label={'Password'}
                        onChangeText={text => {
                            this.setState({ newPassword: text });
                        }}
                        value={this.state.newPassword}
                        // ***
                        secureTextEntry
                        multiline={false}
                        orientation={'vertical'}>
                    </InputWithLabel>
                    </View>


                        <TouchableOpacity activeOpacity={0.5} onPress={this._alert_message} style={{padding: 20}}>
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