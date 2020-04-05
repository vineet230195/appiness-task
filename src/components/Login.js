import React from 'react' 
import {loginUser} from '../action/userAction'
import {connect} from 'react-redux'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            msg:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            password: this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/employeeList')
        }

        const errorMsg=()=>{
            return this.setState({msg:'Invalid username or password'})
        }
        this.props.dispatch(loginUser(formData,redirect,errorMsg))
    }

    render() {
        return (
            <div className='container bg-light'>
                <div className='row align-items-center'>
                <div className='col-md-4 offset-md-4'>
                {this.state.msg &&<div className="alert alert-danger"><span>{this.state.msg}</span></div>}
                <h2 className='display-5 text-center'>Login</h2>
                <form onSubmit={this.handleSubmit} novalidate>
                <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" className='form-control'  id="username" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} required/>
                    <div className="invalid-feedback">Please enter your username to continue.</div>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control ' id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <div className="invalid-feedback">Please enter your password to continue.</div>
                </div>
                    <input type="submit" className='btn btn-primary btn-sm' value="Login" />
                </form>
            </div>
            </div>
            
            </div>
        )
    }
}


export default connect()(Login)