import React,{ useState} from 'react'

function Formsub(){
    const [name, setName] = useState({
        fname: '',
        lname: ''
    });
    return(
        <form>
            <input type="text" value={name.fname} onChange={(e) => setName({ ...name, fname: e.target.value})} />
            <input type="text" value={name.lname} onChange={(e) => setName({ ...name, lname: e.target.value})} />
            <h1>Name is: {name.fname}</h1>
            <h1>Name is: {name.lname}</h1>
        </form>
    )
}

export default Formsub
