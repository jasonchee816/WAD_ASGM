import {
    Button, 
    Text, 
    View
} from 'react-native';
import { CartStyles } from './CartStyles.js';

function QuantityPicker(props) {

}

export function CartItem(props) {
    props.item = null;
    props.quantity = 1;

    return(
        <View>
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

    <!-- Quantity (Text Field) -->
    <div id="u7" class="ax_default text_field" data-label="Quantity">
    <img id="u7_img" class="img " src="images/page_1/regen/quantity_u7.svg"/>
    <input id="u7_input" type="text" value="1" class="u7_input"/>
    </div>

    <!-- Subtractor (Line) --> 
    // if quantity < 0, quantity = 0
    if (quantity == 0) {
            <Dialog 
                isVisible={true}>
                <Dialog.Title title="Do you want to delete this item" />
                <Dialog.Actions>
                    <Dialog.Button title="Yes" onPress={setVisible} />
                    <Dialog.Button title="No" onPress={setVisible} />
                </Dialog.Actions>
            </Dialog>
        }
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
        </View>
    );
}