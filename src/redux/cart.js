// userId,itemId, itemName, item Desc, itemPrice,
// itemImg, 

import { actionTypes } from "./actionTypex";

const cartData = [];

function cartReducer(state = cartData, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let tempAddData = [...state];
            // console.log(action.data)
            // tempAddData.push(action.data);

            if (tempAddData.length === 0) {
                // console.log("cart length is 0");
                tempAddData.push(action.data);
            }
            else {
                let flag = true;
                for (let i = 0; i < tempAddData.length; i++) {
                    // console.log("length    ->   " + tempAddData.length)
                    if (tempAddData[i].itemId === action.data.itemId) {
                        // console.log(tempAddData[i].itemId, action.data.itemId);
                        // console.log("item already added !!");
                        flag = false;
                        break;
                        // return tempAddData;

                    }
                }
                if (flag === true) {
                    tempAddData.push(action.data);
                    // console.log("new item added !!!");

                    return tempAddData;
                }
            }

            return tempAddData;

        case actionTypes.DELETE_ALL_CART_ITEM:
            // console.log("it worked!!");
            const tempState = []
            return tempState;

        case actionTypes.DELETE_CART_ITEM:
            const tempDltItems = [...state];
            tempDltItems.splice(action.data, 1)
            return tempDltItems;

        default: return state;
    }
}


export default cartReducer;