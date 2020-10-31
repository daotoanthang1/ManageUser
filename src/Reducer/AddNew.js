import React from 'react';
import * as constant from "../contant/index"
const innitialState = {
    list:[],
    statusBoard:false
}
const AddNew = (state = innitialState,action) => {
    switch (action.type){
        // case constant.ADD_NEW_PERSON:{
        //     return state;
        // };
        case constant.FIX_PERSON:{
            return {
                ...state,
                // statusBoard:!statusBoard
            }
        }
        default:
            return state;
    }
}

export default AddNew;
