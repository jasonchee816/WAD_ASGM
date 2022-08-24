import React, { Component } from 'react';
import {
    Platform,
    View,
    Text,
    TextInput,
    TouchableNativeFeedback,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * InputWithLabel
 */
class InputWithLabel extends Component {
    constructor(props) {
        super(props);

        this.orientation = this.props.orientation
            ? this.props.orientation == 'horizontal'
                ? 'row'
                : 'column'
            : 'column';
    }

    render() {
        return (
            <View style={[inputStyles.container, { flexDirection: this.orientation }]}>
                <Text style={this.props.textLabelStyle}>{this.props.label}</Text>
                <TextInput style={[this.props.textInputStyle]} {...this.props} />
            </View>
        );
    }
}

/**
 * AppButton
 */
class AppButton extends Component {
    constructor(props) {
        super(props);

        if (props.theme) {
            switch (props.theme) {
                case 'success':
                    this.backgroundColor = '#449d44';
                    break;
                case 'info':
                    this.backgroundColor = '#31b0d5';
                    break;
                case 'warning':
                    this.backgroundColor = '#ec971f';
                    break;
                case 'danger':
                    this.backgroundColor = '#c9302c';
                    break;
                case 'primary':
                default:
                    this.backgroundColor = '#286090';
            }
        } else {
            this.backgroundColor = '#286090';
        }
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                onLongPress={this.props.onLongPress}
                background={
                    Platform.OS === 'android'
                        ? TouchableNativeFeedback.SelectableBackgroundBorderless(210)
                        : ''
                }>
                <View
                    style={[
                        buttonStyles.button,
                        { backgroundColor: this.backgroundColor },
                    ]}>
                    <Text style={buttonStyles.buttonText}>{this.props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const buttonStyles = StyleSheet.create({
    button: {
        margin: 5,
        alignItems: 'center',
    },
    buttonText: {
        padding: 20,
        fontSize: 20,
        color: 'white',
    },
});

/**
 * PickerWithLabel
 */

class PickerWithLabel extends Component {
    constructor(props) {
        super(props);

        this.orientation = this.props.orientation
            ? this.props.orientation == 'horizontal'
                ? 'row'
                : 'column'
            : 'column';
    }

    render() {
        return (
            <View style={[inputStyles.container, { flexDirection: this.orientation }]}>
                <Text style={this.props.textLabelStyle}>{this.props.label}</Text>
                <Picker {...this.props}>
                    {this.props.items.map((item, index) => {
                        return (
                            <Picker.Item
                                label={item.value}
                                value={item.key}
                                key={item.key}
                                style={this.props.pickerItemStyle}
                            />
                        );
                    })}
                </Picker>
            </View>
        );
    }
}

const inputStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

/**
 * BackButton
 */
 class BackButton extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.header}>
                    <Ionicons name='chevron-back-circle' size={40} color='pink' onPress={this.props.onPress}/>
                    <Text style={styles.detailsTitleStyle}>{this.title}</Text>
                </View>
            </TouchableOpacity>
        )
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
});


/**
 * Export modules
 */
module.exports = {
    InputWithLabel: InputWithLabel,
    AppButton: AppButton,
    PickerWithLabel: PickerWithLabel,
    BackButton: BackButton,
};