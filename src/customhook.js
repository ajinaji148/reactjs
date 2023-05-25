import { useRef, useState} from "react"

// const useFetch=(url)=>{
//     const[data,setdata]=useState([]);
//     useEffect(()=>{
//         fetch(url).then((data)=>data.json()).then((data)=>setdata(data))
//     },[url]);
//     console.log(data)



// }

// const Withcustomhook=()=>{
//     const[data]=useFetch('https://jsonplaceholder.typicode.com/users')
//     console.log(data)
//     return(
//         <>
//         <ul>
//             {data.map((e)=><li>{e.name}</li>)}
//         </ul>
//         </>
//         )

// }
// export default Withcustomhook

// export function Controlledcomponent(){
//     const[name,setname]=useState('')
//     function Handlesubmit(e){
//         alert(e.type)
//         e.preventdefault()
//         alert(name)

//     }
//     return(
//         <>
//         <form onSubmit={Handlesubmit}>
//             <input type='text' value={name} onChange={(e)=>setname(e.target.value)} />
//             <button>Submit</button>
//         </form>
//         </>
//     )
// }

// export function Uncontrolledcomponent(){
//     const name=useRef('')
//         function Handlesubmit(e){
//             e.preventDefault()
//             alert(name.current.value)
//         }
//         return(
//             <>
//             <form onSubmit={Handlesubmit}>
//                 <input type='text' ref={name} />
//                 <button>Submit</button>

//             </form>
//             </>
//         )
// }


export function Form(){
    const[name,setname]=useState('') 
    const[mail,setmail]=useState('')
    const[select,setselect]=useState(false)
    const[course,setcourse]=useState('')
    const[success,setsuccess]=useState(false)
    const[error,seterror]=useState(false )
    const nameref=useRef(null)
    const emailref=useRef(null)
    const courseref=useRef(null )
    const Success=()=>{
        return(
            <div style={{display:success? 'block':'none'}}>
                <h1>successfully registred</h1>
            </div>
        )
    }
    
    const Error=()=>{
        return(
            <>
            <div style={{display:error? 'block':'none'}}>
            <h1>pls fill all the field</h1>
            </div>
            <div style={{display:select? 'block':'none'}}>
               
            <p>please choose other course</p>
    
            </div>
            </>
        )
    }
        const Handlesubmit = (e)=>{

         var  x=nameref.current.value        
         var y=emailref.current.value
         var z=courseref.current.value
         console.log(x,y,z)
         e.preventDefault()
        
         if(x==""||y==""||z==""){
            seterror(true)
            setsuccess(false)
         }else if(z=='java'){
            setselect(true)
         }
         else{
            setsuccess(true)
            seterror(false)
         }
 
        }
        return(
            <>
             
             <form onSubmit={Handlesubmit} >
                
                <label>name :</label>
                <input type='text'  ref={nameref}/><br/>
                <label>email:</label>
                <input type='email' ref ={emailref} /><br/>  
                <label>course:</label>
                <select ref={courseref}>

                    <option value="java"  >java</option>

                    <option value="react">react</option>

                    <option value="php">php</option>

                </select>


                <button>Submit</button>

            </form>
            <div>
                {Success()}
                {Error()}
            </div>
            </>

        )
        
            
        
}