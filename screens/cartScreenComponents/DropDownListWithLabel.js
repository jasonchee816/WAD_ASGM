import {
    Button, 
    Text, 
    View
} from 'react-native';
import { CartStyles } from './CartStyles.js';

export function DropDownListWithLabel(props) {
    props.foodId = undefined;
    props.name = '';
    props.price = undefined;
    props.outOfStock = undefined;
    props.imageSource = '';

    return(
        <View>

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
        </View>
    );
}