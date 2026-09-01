import React from 'react'

function Navbar() {
  return (
    <div className='py-4 px-8 shadow-xl shadow-blue-500/30 grid grid-cols-3 items-center'>
      {/* Logo */}
      <div>
        <h2 className='text-white text-4xl font-bold'>React<span className='text-blue-500'>Pro</span>ject</h2>
      </div>
      {/* Menu */}
      <div>
        <ul className='text-white text-xl font-semibold flex justify-center items-center gap-6'>
          <li className='text-blue-500'>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact us</li>
        </ul>
      </div>
      {/* Buttons */}
      <div className='flex items-center justify-end'>
        <button className='text-blue-500 px-6 py-2 bg-white rounded-l-2xl'>Login</button>
        <button className='text-white px-6 py-2 bg-blue-500 rounded-r-2xl'>Signup</button>
      </div>
    </div>
  )
}

export default Navbar