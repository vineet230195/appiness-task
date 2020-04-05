import React from 'react'
import {connect} from 'react-redux'

import {userDashboard} from '../action/userAction'
class Dashboard extends React.Component{
    componentDidMount(){
        this.props.dispatch(userDashboard())
    }

render(){
    return(
        this.props.data.user?<div className='container bg-light'>
        <h2 className='display-5 text-center'>Employee List</h2>
         <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.user.map(user=>{
                                return(
                                    <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNo}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>:''
    )
 }
}

const mapStateToProps=(State)=>{
    return{
        data:State.dashboard
    }
}
export default connect(mapStateToProps)(Dashboard)