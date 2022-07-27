import {
    Button, 
    Text, 
    View
} from 'react-native';
import { CartStyles } from './CartStyles.js';

export function DineInOrTakeawayOption(props) {
    props.foodId = undefined;
    props.name = '';
    props.price = undefined;
    props.outOfStock = undefined;
    props.imageSource = '';

    return(
        <View>
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
        </View>
    );
}