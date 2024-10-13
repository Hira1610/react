import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className=' bg-emerald-900  flex py-5 px-10 items-center justify-between '>
                <h2 className='text-2xl'>Hira</h2>
                <div className='flex gap-10'>
                    <h4 className='text-xl'>Home</h4>
                    <h4 className='text-xl'>About</h4>
                    <h4 className='text-xl'>Projects</h4>
                    <h4 className='text-xl'>Contact</h4>
                </div> 
            </nav>
        </>
    )
}

export default Navbar
