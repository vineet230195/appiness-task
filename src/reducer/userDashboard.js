const initalState=[]

const userDashboard=(state=initalState,action)=>{
    switch(action.type){
        case 'USER_DASHBOARD':{
            return action.payload
        }
        default:{
            return initalState
        }
    }
}

export default userDashboard    