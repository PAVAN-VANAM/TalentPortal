import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <h1 class="text-3xl pr-10 font-bold text-blue-600">Talent Portal</h1>
                <nav class="space-x-4">
                    <a href="#" class="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="#" class="text-gray-600 hover:text-blue-600">Companies</a>
                    <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
                </nav>
            </div>
            <div class="flex items-center space-x-4">
                <div class="relative">
                    <input type="text" class="border rounded-md px-4 py-2" placeholder="Search here..."/>
                    
                </div>
                <div class="relative">
                    Profile pic
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}
