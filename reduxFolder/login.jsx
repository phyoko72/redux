
export const setUserDetails = (input) => ({type:"LOGIN",payload:input})
export const removeUserDetails = () => ({type:"LOGOUT"})

const loginReducer = (userInfo=null,action)=>{
    switch (action.type) {

        case "LOGIN":
            return {...userInfo, ...action.payload }

        case "LOGOUT":
            return null
    
        default:
            return userInfo
    }
}

export default loginReducer
