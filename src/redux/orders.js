import { actionTypes } from "./actionTypex";

let userOrders = [];

const userOrdersReducer = (state = userOrders, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEMS_TO_MY_ORDERS:
            let addItems = [...state, ...action.data];
            // console.log(addItems);
            return addItems;

        default: return state;
    }
}

export default userOrdersReducer;