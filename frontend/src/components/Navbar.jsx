import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='sticky top-0'>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <h1 className="text-3xl pr-10 font-bold text-blue-600">Talent Portal</h1>
                {/* <nav className="space-x-4">
                    <a href='./dashboard' className="text-lg text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#" className="text-lg text-gray-700 hover:text-blue-600">Companies</a>
                    <a href="#" className="text-lg text-gray-700 hover:text-blue-600">About</a>
                </nav> */}
            </div>
            <Link to='/login'>Login</Link>
        </div>
    </header>
    </div>
  )
}
