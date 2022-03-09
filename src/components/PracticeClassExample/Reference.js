import React, { Component } from 'react'
class Reference extends Component{
    constructor(props){
        super(props)
        this.inputReference = React.createRef()
    }
    componentDidMount(){
        this.inputReference.current.focus()
    }
    clickHandler = () => {
        alert(this.inputReference.current.value)
    }
    render(){
        return(
            <div>
                <input type="text"/>
                <input type="text" ref={ this.inputReference }/>
                <button onClick={ this.clickHandler }>Click</button>
            </div>
        )
    }
}

export default Reference
