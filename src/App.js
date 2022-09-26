import FunctionalComponent from './component/funcomponent';
import ClassComponent from './component/classcomponent'
import './App.css';
import React,{useState} from 'react'

function App() {
  const [show,setShow]=useState(false)
  const [show1,setShow1]=useState(false)

  return (
    <div className="App">
      <h1>Styling using Functional and Class Component</h1>

      <button onClick={()=>setShow(!show)}>To see styling in functional component</button>

      <button onClick={()=>setShow1(!show1)}>To see styling in Class component</button>

      <div className='fun-class'>

      {show?<FunctionalComponent/>:null}
      {show1?<ClassComponent/>:null}
      </div>
    </div>
  );
}

export default App;
