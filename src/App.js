// import { useCallback,memo, useState } from 'react';
// import { useState } from 'react';
import { useState } from 'react';
import './App.css';

// function App() {
//   const ref = useRef()
//   const [a,b] = useState('')
//   useEffect(()=>{
//     ref.current=a
//   },[a])
 

//   return (
//   <>
//   {/* <p>count:{a}</p>
//   <button onClick={()=>{b(a+1)}}>click</button> */}
//   {/* <input type='text' id='input'/>
//   <button id='btn' onClick={()=>{  
//     var x = document.getElementById('input').value
//   b([...u,x])}}>click</button>
//   <ol type='I'>
//     {u.map((a)=>{return(<li id='li'>{a}</li>)})}
//     </ol>
//   </>
//   ); */}
//   <p>current value: {a} prev value: {ref.current}</p>
//   <input id='int'/>
//   <button onClick={()=>{var val = document.getElementById('int').value
// b(val)}} >+</button>
//   </>
//   )
// }

// export default App;

// export function Myfun(){
//   const[count,setcount]=useState(0)
//   const[todo,settodo]=useState(['apple','orange','mango']) 
//    var calculation=useMemo(()=>setcalculation(count),[count])
//   return(
//     <>
//     <p>{count}</p>
//     <button onClick={()=>setcount(count+1)}>click</button>
//     <ol>
//       {todo.map((e)=><li>{e}</li>)}
//     </ol>
//     <button onClick={()=>settodo([...todo,'grapes'])}>click</button>
//     <p>{calculation}</p>
//     </>


//   )
// }
// function setcalculation(count){
//   console.log('calculating...')
//   var i=0
//   for (i=0;i<100;i++){
//     count+=i
//   }
//   return count
// }

// export function Myfun(){
//   const[count,setcount]=useState(0)
//   const[todo,addtodo]=useState(['a','b','c'])
//   const increment=()=>{
//     setcount(count+1)
//   }
//   const add=useCallback(()=>{addtodo([...todo,'newdata'])},[todo])
//   return(
//     <>
//     <Child todo={todo}addtodo={add}/>
//     <p>{count}</p>
//     <button onClick={increment}>click</button>

    
//     </>
//   )
// }
//  var Child= memo (function Childcomponent({todo,addtodo}){
//   console.log('rendering....')
//   return(
//     <>
//     <ul>
//       {todo.map((e)=>{return(<li>{e}</li>)})}
//     </ul>
//     <button onClick={addtodo}>click</button>
//     </>
//   )
// })\


// export function Myfirstcomponent(){
//   var animal=['cat','dog','cow']
//   // const [data,setdata]=useState(['cat','dog','cow'])
//   return(
//     <>
//     <h1>helloworld</h1>
//     <p>welcome to scope india</p>
//     <ul>{
//       animal.map((e)=><li>{e}</li>)}
//     </ul>
//     {/* <p>{data}</p> */}
//     {/* <button onClick={()=><li>{setdata}</li>}></button> */}
//     </>
//   )
// }

// export function Myfirstcomponent(){
 
//   const[count,setcount]=useState(0)
//   useEffect(()=>{setcount(count+1)},[])

//   return(
//     <>
   
//     <p>count={count}</p>
//     <button onClick={()=>{setcount(count+2)}}>click</button>
//     </>
//   )
// }

export function Myfirstcomponent(){
  const[data,setdata]=useState(['apple','orange','mango'])

  return(
    <>
    {/* <p>{data}</p> */}
    <ol>{
    data.map((e)=><li>{e}</li>)}
    </ol>
    <button onClick={()=>setdata([...data,'grapes'])}>click</button>
    <input type="text" id='pa'/>
    
    <button onClick={()=>{var y=document.getElementById('pa').value
   setdata([...data,y])}}>click</button>
    </>
  )
}