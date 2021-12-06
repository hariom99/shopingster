import { actionTypes } from "./actionTypex";


// { name: "", email: "", password: "" } 
// in this format data will come from ui.


const users = [
    {
        email: "hariomkourav1999@gmail.com",
        name: "Hariom Kourav",
        password: "1",
        userId: 0,
        isLoggedIn: true,
    }
];
// console.log("log called");
let userId = 1;
function userReducer(state = users, action) {
    switch (action.type) {

        case actionTypes.REGISTER_USER:
            const tempArr = [...state]
            const userData = { ...action.data, userId };
            userId += 1;
            // console.log(userData);
            tempArr.push(userData);
            // console.log(tempArr);
            return tempArr;

        case actionTypes.LOGIN_USER:
            // console.log(action.data);
            // console.log(state);
            const tempState = [...state];
            tempState.forEach((ele) => {
                if (ele.userId === action.data) {
                    ele.isLoggedIn = true;
                    return ele;
                }
            })
            return tempState;

        case actionTypes.LOG_OUT_USER:
            const tempLogOutArr = [...state];
            tempLogOutArr.forEach((item) => {
                if (item.userId === action.data) {
                    item.isLoggedIn = false;
                }
            });
            return tempLogOutArr;


        default: return state;
    }
}

export default userReducer;