import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_ERROR, REGISTER_USER_LOADING } from "./user.types"

const initialState = {
    token:null,
    auth:false,
    loading:false,
    error:false
}



export default function userReducer(state=initialState,action){

    const {type,payload} = action

    switch(type){

        case LOGIN_USER_LOADING:{

            return {
                ...state , loading:true
            }
        }

        case LOGIN_USER_SUCCESS:{
            return {
                ...state, loading:false, error:false, token:payload,auth:true
            }
        }

        case LOGIN_USER_ERROR:{
            return {
                ...state , loading:false,error:true
            }
        }
        case LOGOUT :{
            return initialState
        }
        

        default:{
            return state
        }
  



    }

}