import React , { Component } from 'react'

class Condition extends Component{
    constructor(props){
        super(props)
            this.state ={
                isExecute:true
            }
    }
    render(){
        let text 
        if(this.state.isExecute){
            text = <div><h1>Hello</h1></div>
        }
        else{
            text = <div>World</div>
        }
        return <div>{ text }</div>
    }
}
export default Condition
