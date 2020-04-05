import login from '../data/login.json'
import Users from '../data/dashboard.json'

export const loginUser=(formdata,redirect,errorMsg)=>{
    return()=>{
        if(JSON.stringify(formdata) === JSON.stringify(login)){
            localStorage.setItem('authToken',JSON.stringify(formdata))
             redirect()
        }else{
            errorMsg()
        }
    }
}


export const userDashboard=()=>{
    return{
        type:'USER_DASHBOARD',
        payload:Users

    }
}