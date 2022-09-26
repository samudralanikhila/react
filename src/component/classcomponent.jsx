import React from 'react'

class ClassComponent extends React.Component{
    render(){
        return(
            <div className='fun1'>
                <h2>This is created using ClassComponent</h2>
                <p>This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
            </div>
        )
    }
}
export default ClassComponent;