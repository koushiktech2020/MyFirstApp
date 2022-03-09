import React, { Component } from 'react'

class Formsubmit extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'' ,
            password: '',
            age:''
        }
    }

    uName = (main) =>{
        this.setState({
            username: main.target.value
        })
    }

    uPass = (main) =>{
        this.setState({
            password: main.target.value
        })
    }
    uAge = (main) =>{
        this.setState({
            age: main.target.value
        })
    }
    submit = main =>{
        alert(`${this.state.username} ${this.state.password} ${this.state.age}`)
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.uName} />
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.uPass} />
                    <label>Age</label>
                    <input type="text" value={this.state.age} onChange={this.uAge} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Formsubmit
