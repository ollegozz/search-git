import React from 'react'
import { Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
        <h3 className='font-bold'>Github search</h3>
        <span>
              <Link to="/" className='mr-2 hover:text-black'>Home</Link>
              <Link to="/Favorites" className='hover:text-black'>Favorites</Link>
        </span>

    </nav>
  )
}
