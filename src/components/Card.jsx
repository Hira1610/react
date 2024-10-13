import React from 'react'
///PROPS LEARNING
const Card = (props) => {

  console.log(props.photo)
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded'>

      {/* <h1 className='text-3xl'> UserName is {props.a}</h1> */}
      <img className=' ml-8 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
      <h1 className='text-black text-2xl font-semibold mb-4'>{props.username} ,{props.surname}</h1>
      <h2 className='text-black'>{props.city}, {props.age}</h2>
      <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default Card
