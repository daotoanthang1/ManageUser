import * as constant from "../contant/index"
export const addNewInfo = () => {
    return {
        type: constant.ADD_NEW_PERSON,
        
    }
}
export const fixInfo = (per)=>{
    return {
        type:constant.FIX_PERSON,
        per
    }
}
