

import{BrowserRouter as Router,Route,Routes,Link,useParams} from 'react-router-dom'


// 
// export function Routing(){
//     return(
//         <>
//         <Router>
//             <ul>
//                 <li><Link to='/'>Home</Link></li>
//                 <li><Link to='/About'>About</Link></li>
//                 <li><Link to='/Contact'>Contact</Link></li>
//             </ul>
//             <Routes>
//                 <Route exact path='/'element={<Home/>}></Route>
//                 <Route exact path='/About'element={<About/>}></Route>
//                 <Route exact path='/Contact'element={<Contact/>}></Route>
//             </Routes>
//         </Router>
//         </>
//     )
// }





// function Home(){
//     return(
//         <h1>home page</h1>
//     )
// }
// function About(){
//     return(
//         <h1>About page</h1>
//     )
// }
// function Contact(){
//     return(
//         <h1>Contact page</h1>
//     )
// }

export function Routing(){
    return(
        <>
        <Router>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact/100'>Contact</Link></li>
            </ul>
            <Routes>
                <Route exact path='/'element={<Home/>}></Route>
                <Route exact path='/About'element={<About/>}></Route>
                <Route exact path='/Contact/:id' element={<Contact/>}></Route>
            </Routes>
        </Router>
        </>
    )
}

export function Contact(){
    const{id}=useParams()
    console.log({id})

    return(
        <p>id={id}</p>
    )
}





function Home(){
    return(
        <h1>home page</h1>
    )
}
function About(){
    return(
        <h1>About page</h1>
    )
}
