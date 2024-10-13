// import React from 'react'
//  SIMPLE WAY BUT NOT EFFICENT
// const App = () => {
//   let user = "Hira";

//   const changedUser = ()=>{
//     console.log(user)
//     user = "Hiruu"
//     console.log(user)   //  yaha pr values to chnaged hori h but UI my show ni kr ri 
//   }
//   return (
//     <div>
//       <h1>Hello {user}</h1>    {/* // is sy ya hoga k jo upr user my value di hogi hmny wo yaha print hogi  */}
//       <button onClick={changedUser}>User Changed </button>
//     </div>
//   )
// }

// export default App



////USESTATE HOOKS
// Hooks - special type of function 
// import React, { useState } from 'react'

// const App = () => {
//   const [first, setfirst] = useState(0) ///is sy ya hoga k koi count start  hoga or ismy first jo h wo hmra readable h jo hmny pehli vlue initialize krwai h usko read krta ha or setfirst hmra writeable h jisky through hm apni values ya kuch b change krwa skty hai.
//   return (
//     <div>
//       <h1>Number is {first}</h1>
//       <button onClick={() => setfirst(first + 1)}>Increment</button>
//       <button onClick={() => setfirst(first - 1)}>Decrement</button>
//     </div>
//   )
// }
// export default App


//ADDING CSS AND FORM 
// import React from 'react'

// const App = () => {
//   const submitHandler = (e)=>{
//     e.preventDefault() //ya hmra page reload ni kry ga
//     console.log("Hello")
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input className='px-4 py-3 rounded text-xl m-5 text-black font-semibold' type="text" placeholder='Enter your name' />
//         <button className='px-4 py-3 m-6 rounded text-xl font-semibold bg-emerlad-500 text-white'> Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App


///TWO WAY BINDING
// import React, { useState } from 'react'

// const App = () => {

//   const [username, setusername] = useState('')

//   const submitHandler = (e)=>{
//     e.preventDefault() //ya hmra page reload ni kry ga
//     console.log(username)
//     setusername('')
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input 
//         value={username}
//         onChange={(e)=>{
//           setusername(e.target.value)
//         }}
//         className='px-4 py-3 rounded text-xl m-5 text-black font-semibold' 
//         type="text" 
//         placeholder='Enter your name' />
//         <button className='px-4 py-3 m-6 rounded text-xl font-semibold bg-emerlad-500 text-white'> Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App




////PROPS 
import React from 'react'
import Card from './components/Card'
const App = () => {
  const users = [
    {
      "username": "john_doe",
      "surname": "Doe",
      "city": "New York",
      "age": 28,
      "profilePhoto": "https://example.com/profiles/john_doe.jpg"
    },
    {
      "username": "jane_smith",
      "surname": "Smith",
      "city": "Los Angeles",
      "age": 32,
      "profilePhoto": "https://example.com/profiles/jane_smith.jpg"
    },
    {
      "username": "mike_johnson",
      "surname": "Johnson",
      "city": "Chicago",
      "age": 25,
      "profilePhoto": "https://example.com/profiles/mike_johnson.jpg"
    },
    {
      "username": "emma_brown",
      "surname": "Brown",
      "city": "Houston",
      "age": 30,
      "profilePhoto": "https://example.com/profiles/emma_brown.jpg"
    },
    {
      "username": "lucas_miller",
      "surname": "Miller",
      "city": "Phoenix",
      "age": 27,
      "profilePhoto": "https://example.com/profiles/lucas_miller.jpg"
    }
  ]

  // const num = 10
  return (
    <div>
      <div className='p-10'>
        {/* <Card a={num} /> */}
        
        {users.map(function(elem,idx){
          return <Card  key={idx} username={elem.username} surname={elem.surname} city={elem.city} age={elem.age} photo={elem.profilePhoto} />
        })}
      </div>
    </div>
  )
}

export default App
