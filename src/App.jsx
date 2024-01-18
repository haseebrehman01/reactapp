import logo from './logo.svg';
import './App.css';
// import IMAGE  from './assets/images/IMG-20230509-WA0002-removebg-preview.png' ;


// const name = "haseeb"

// const foo = ()=>{
//   console.log("foo chala")
// }

// const obj =[{
//   name : "haseeb",
//   age : "78"
// },
// {
//   name : "alo",
//   age : "7s8"
// },
// {
//   name : "aa",
//   age : "7s8"
// }
// ]
// function App() { // componenet ka pehla letter capital rakhna hai, //closing tap imp hai
//   // js return sa pehla likhni hai or return ka andar bhi likh sakta {console.log("hello")} esa
//   // project ko chalna/server ka lya npm start ki cmmad chalyega 
//   // javacscript mai style dena ka lya {} yeh js x ko btayega ka ham js lekh rah {{color : "red"}} yeh style ka obj 
//   // yaha inline style chalti nhi yaha sirf js ki styling chalti
//   // image hamesha import karainga lkn  agar url yani google sa copy hai to direct bhi lagasakta
//   // bina argument wala func ko esa likenga      <button onClick={foo}>click me</button> 
//   // or argument wala ko  <button onClick={()=>foo()}>click me</button> 
//   // list rendering concept : obj direct print nahi hota uspa maplagana parhta
//   return (
//     <div>
//      <h2 style={{backgroundColor : "red", color : "white"}}>hello</h2>
     
//   <h2>{name}</h2>
//      {/* <img src="" alt="" /> */}
//      <br></br>
//      <h2>hoa</h2>
//      <button onClick={foo}>click me</button> 
//      <ul>
//      {
//      obj.map((v,i)=><li>{v.name}</li>)
//      }
//      </ul>

//     </div>
//   );
// }

// export default App;


// components
import Footer from "./components/footer.jsx"; 
import Header from "./components/header.jsx";
import Button from 'react-bootstrap/Button';
console.log(Button)
function App() {
  return(

    <div>
<Header></Header>
<div>Main</div>
<Footer></Footer>
<Button variant="success" >Success</Button>
    </div>
  )
}
export default  App
