import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-slate-800 h-16 px-16 items-center flex">
      <h1 className="text-3xl font-bold text-white-400"> 💻 EM Portal</h1>
      <div className="space-x-4 ml-auto">
      <a className ="hover:text-stone-500 " href='/'>Home</a>
      <a className ="hover:text-stone-500 " href='/'>Profile</a>
      <a className ="hover:text-stone-500 "  href='/'>Logout</a>
      </div>
    </div>
  )
}

export default Navbar
