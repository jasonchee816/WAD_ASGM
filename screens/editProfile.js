import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import { BackButton } from '../UI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { passwordValidator } from '../helpers/passwordValidator';
import { oldPwdValidator } from '../helpers/oldPwdValidator';
import TextInput from '../components/TextInput';

let config = require('../Config');

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '1',
            async_password: '',
            isFetching: false,
            old_password: {
                value: '',
                error: '',
            },
            password: {
                value: '',
                value2: '',
                error: '',
            }, 
        };
        this._readUser = this._readUser.bind(this);
        this._edit = this._edit.bind(this);
        this.onEditPressed = this.onEditPressed.bind(this);
    }

    componentDidMount() {
        this._readUser();
    }

    async _readUser() {
        try {
            let keys = await AsyncStorage.multiGet(
                ['user_id', 'password'],
                (err, stores) => {
                    console.log(stores)
                    stores.map((result, i, store) => {
                        let key = store[i][0];
                        let value = store[i][1];
                        if (['user_id', 'password'].indexOf(key) != -1) {
                            if (key == 'user_id') {
                                this.setState({ id: value })
                            }
                            else if (key == 'password') {
                                this.setState({ async_password: value })
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

    onEditPressed = () => {
        console.log(this.state.old_password.value, this.state.async_password, this.state.password.value)

        const oldPasswordError = oldPwdValidator(
            this.state.old_password.value,
            this.state.async_password,
        );

        const passwordError = passwordValidator(
            this.state.password.value,
            this.state.password.value2,
        );

        if (oldPasswordError || passwordError) {
            let oldPassword = { ...this.state.old_password, error: oldPasswordError };
            this.setState({ old_password: oldPassword });

            let newPassword = { ...this.state.password, error: passwordError };
            this.setState({ password: newPassword });
            return;
        } else {
            this._alert_message()
        }
    };

    _alert_message = () => {
        Alert.alert(
            'Confirm to edit ?', "Press Yes or No", [
            {
                text: 'Yes', onPress: () => {
                    this._deleteSetting()

                }
            },

            { text: 'No', onPress: () => { } },
        ],

            {
                cancelable: true
            }
        );
    }

    async _deleteSetting() {
        try {
            await AsyncStorage.removeItem('password');
            this._saveSetting('password', this.state.password.value.toString());
            console.log('## Succesfully Deleted ##')
        } catch (error) {
            console.log('## ERROR DELETING ITEM##: ', error)
        }
        
    }

    async _saveSetting(key, value) {
        try {
            await AsyncStorage.setItem(key, value); 
            console.log('## Succesfully Saved ##')
        } catch (error) {
            console.log('## ERROR SAVING ITEM ##: ', error);
        }  
        // this.props.route.params.refresh();
        this._edit();
    }

    _edit() {
        let url = config.settings.serverPath + '/api/memberCP';

        this.setState({ isFetching: true });
        fetch(url, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: 1,
            password: this.state.password.value,
            
          }),
        })
          .then(response => {
            console.log(response);
            if (!response.ok) {
              Alert.alert('Error:', response.status.toString());
              throw Error('Error ' + response.status);
            }
    
            return response.json();
          })
          .then(respondJson => {
            if (respondJson.affected > 0) {
              Alert.alert('Changes Successfully.', 'Password had Saved', [{ onPress: ()=>{
                this.props.navigation.navigate('viewProfile');
            }}]);

            } else {
              Alert.alert('Error in UPDATING');
            }
            
          })
          .catch(error => {
            console.log(error);
          });
      } 


    render() {
        console.log(this.state.password.error)
        return (
            <ScrollView>
                <BackButton title="  Edit Profile" onPress={this.props.navigation.goBack} />
                <View style={styles.container}>
                    <TextInput
                        textLabelStyle={styles.TextLabel}
                        textInputStyle={styles.TextInput}
                        label={'Old Password'}
                        returnKeyType="done"
                        value={this.state.old_password.value}
                        onChangeText={text => {
                            let oldPassword = { ...this.state.old_password, value: text };
                            this.setState({ old_password: oldPassword });
                        }}
                        error={!!this.state.old_password.error}
                        errorText={this.state.old_password.error}
                        secureTextEntry
                        orientation={'vertical'}
                    />

                    <TextInput
                        textLabelStyle={styles.TextLabel}
                        textInputStyle={styles.TextInput}
                        label={'New Password'}
                        returnKeyType="done"
                        value={this.state.password.value}
                        onChangeText={text => {
                            let newPassword = { ...this.state.password, value: text };
                            this.setState({ password: newPassword });
                        }}
                        error={!!this.state.password.error}
                        errorText={this.state.password.error}
                        secureTextEntry
                        orientation={'vertical'}
                    /> 

                    <TextInput
                        textLabelStyle={styles.TextLabel}
                        textInputStyle={styles.TextInput}
                        label={'Re-Password'}
                        returnKeyType="done"
                        value={this.state.password.value2}
                        onChangeText={text => {
                            let newPassword2 = { ...this.state.password, value2: text };
                            this.setState({ password: newPassword2 });
                        }}
                        error={!!this.state.password.error}
                        errorText={this.state.password.error}
                        secureTextEntry
                        orientation={'vertical'}
                    />

                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={this.onEditPressed} style={{ padding: 20 }}>
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