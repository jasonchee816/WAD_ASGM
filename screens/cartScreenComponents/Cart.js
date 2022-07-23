import React, { Component } from 'react';
import {
    StyleSheet, 
    Button, 
    Text, 
    View
} from 'react-native';
import { DineInOrTakeawayOption } from './TwoRadioButtons';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: undefined,
            dateTime: null,
            tableNo: undefined,
            cartItems: [],
            dineInOrTakeaway: ''
        }
    }

    calculateTotalPrice = () => {
        // return float, 2 decimal point
    }

    makeOrder = () => {
        alert.
    }

    render() {
        if (!this.state.cartItems || this.state.cartItems.length <= 0) 
            return <Text>No item in your cart.</Text>;

        return(
            <View>
                {/* Cart Item */}
                <CartItem />
                <div id="u2" class="ax_default" data-label="Cart Item" data-left="364" data-top="40" data-width="276" data-height="83">

                    <!-- Item Image (Placeholder) -->
                    <div id="u3" class="ax_default placeholder" data-label="Item Image">
                        <img id="u3_img" class="img " src="images/page_1/regen/item_image_u3.svg"/>
                        <div id="u3_text" class="text " style="display:none; visibility: hidden">
                        <p></p>
                        </div>
                    </div>

                    <!-- Item Name (Rectangle) -->
                    <div id="u4" class="ax_default label" data-label="Item Name">
                        <div id="u4_div" class=""></div>
                        <div id="u4_text" class="text ">
                        <p><span>Food Name 1</span></p>
                        </div>
                    </div>

                    <!-- Item Price (Rectangle) -->
                    <div id="u5" class="ax_default paragraph" data-label="Item Price">
                        <div id="u5_div" class=""></div>
                        <div id="u5_text" class="text ">
                        <p><span>RM 10.00</span></p>
                        </div>
                    </div>

                    {/* Quantity Picker */}
                    <QuantityPicker quantity={this.state.quantity}/>
                    <!-- Quantity Picker (Group) -->
                    <div id="u6" class="ax_default" data-label="Quantity Picker" data-left="580" data-top="98" data-width="60" data-height="25">

                        <!-- Quantity (Text Field) -->
                        <div id="u7" class="ax_default text_field" data-label="Quantity">
                        <img id="u7_img" class="img " src="images/page_1/regen/quantity_u7.svg"/>
                        <input id="u7_input" type="text" value="1" class="u7_input"/>
                        </div>

                        <!-- Subtractor (Line) -->
                        <div id="u8" class="ax_default line" data-label="Subtractor">
                        <img id="u8_img" class="img " src="images/page_1/regen/subtractor_u8.svg"/>
                        <div id="u8_text" class="text " style="display:none; visibility: hidden">
                            <p></p>
                        </div>
                        </div>

                        <!-- Adder (Group) -->
                        <div id="u9" class="ax_default" data-label="Adder" data-left="624" data-top="103" data-width="16" data-height="16">

                        <!-- Unnamed (Line) -->
                        <div id="u10" class="ax_default line">
                            <img id="u10_img" class="img " src="images/page_1/regen/subtractor_u8.svg"/>
                            <div id="u10_text" class="text " style="display:none; visibility: hidden">
                            <p></p>
                            </div>
                        </div>

                        <!-- Unnamed (Line) -->
                        <div id="u11" class="ax_default line">
                            <img id="u11_img" class="img " src="images/page_1/regen/subtractor_u8.svg"/>
                            <div id="u11_text" class="text " style="display:none; visibility: hidden">
                            <p></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Dividing Line */}
                <Divider />

                {/* Table Number Input */}
                <DropDownListWithLabel label="Table no." input={this.state.tableNo} min={0} max={30} /> 
                <div id="u23" class="ax_default" data-label="Table Number" data-left="364" data-top="466" data-width="258" data-height="22">

                    <!-- Table Number Input (Droplist) -->
                    <div id="u24" class="ax_default droplist" data-label="Table Number Input">
                        <div id="u24_div" class=""></div>
                        <select id="u24_input" class="u24_input">
                        </select>
                    </div>

                    <!-- Table Number Lable (Rectangle) -->
                    <div id="u25" class="ax_default label" data-label="Table Number Lable">
                        <div id="u25_div" class=""></div>
                        <div id="u25_text" class="text ">
                        <p><span>Table No.</span></p>
                        </div>
                    </div>
                </div>

                {/* Dine in or takeaway option */}
                <TwoRadioButtons button1="Dine in" button2="Takeaway" selected={this.state.dineInOrTakeaway} />
                <div id="u26" class="ax_default" data-left="364" data-top="519" data-width="244" data-height="15">

                    <!-- Unnamed (Radio Button) -->
                    <div id="u27" class="ax_default radio_button">
                        <label id="u27_input_label" for="u27_input" style="position: absolute; left: 0px;">
                        <img id="u27_img" class="img " src="images/page_1/regen/u27.svg"/>
                        <div id="u27_text" class="text ">
                            <p><span>Dine in</span></p>
                        </div>
                        </label>
                        <input id="u27_input" type="radio" value="radio" name="u27"/>
                    </div>

                    <!-- Unnamed (Radio Button) -->
                    <div id="u28" class="ax_default radio_button">
                        <label id="u28_input_label" for="u28_input" style="position: absolute; left: 0px;">
                        <img id="u28_img" class="img " src="images/page_1/regen/u28.svg"/>
                        <div id="u28_text" class="text ">
                            <p><span>Take away</span></p>
                        </div>
                        </label>
                        <input id="u28_input" type="radio" value="radio" name="u28"/>
                    </div>
                </div>

                {/* Total Price */}
                <Text>Total RM{this.calculateTotalPrice()}</Text>

                {/* Make Order Button */}
                <Button title="Order" onPress={this.makeOrder}/>

            </View>
        );
    }
}